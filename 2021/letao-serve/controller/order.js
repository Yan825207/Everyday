const {
    appid,
    mch_id,
    orderUrl,
    notify_url
} = require("../config/wx")
const {
    randomStr,
    createSign,
    getTrade_no,
    // notify_url,
    createOrder
} = require("../utils/index")
const QRcode = require("qrcode")
const { query } = require("../db/query")
module.exports.order = async (ctx) => {
    const {
        body,
        spbill_create_ip,
        trade_type,
        total_fee,
    } = ctx.request.body
    const params = {
        appid,
        mch_id, // 商户号
        nonce_str: randomStr(), // 32位以内的随机字符串
        body, // 商品描述
        out_trade_no: getTrade_no(), // 商户订单号
        total_fee, // 金额
        spbill_create_ip, // 终端ip
        notify_url, // 微信服务器回调的地址
        trade_type, // 支付类型
    }
    const sign = await createSign(params)
    console.log(params);
    let sendData = `
                <xml>
                    <appid>${appid}</appid>
                    <body>${body}</body>
                    <mch_id>${mch_id}</mch_id>
                    <nonce_str>${params.nonce_str}</nonce_str>
                    <notify_url>${notify_url}</notify_url>
                    <out_trade_no>${params.out_trade_no}</out_trade_no>
                    <spbill_create_ip>${spbill_create_ip}</spbill_create_ip>
                    <total_fee>${total_fee}</total_fee>
                    <trade_type>${trade_type}</trade_type>
                    <sign>${sign}</sign>
                </xml>
       `
    const data = await createOrder(orderUrl, sendData);
    const {
        return_code,
        return_msg,
        result_code,
        code_url
    } = data
    // 下单成功
    if (return_code == "SUCCESS" && result_code == "SUCCESS" && return_msg == "OK") {
        // 把订单数据写到数据库
        await query(`insert into payorder (appid,mch_id,nonce_str,body,out_trade_no,total_fee,spbill_create_ip,trade_type,trade_state) values("${appid}","${mch_id}","${params.nonce_str}","${body}","${params.out_trade_no}","${total_fee}","${spbill_create_ip}","${trade_type}","NOTPAY")`)
        data.payUrl = await QRcode.toDataURL(code_url)
        // 把随机字符串和商户订单号传给前端
        data.nonce_str = params.nonce_str;
        data.out_trade_no = params.out_trade_no
    }
    ctx.body = {
        status: 200,
        data
    }
}

// 微信下单通知
module.exports.notify = async (ctx) => {
    // console.log(ctx.request.body);
    // 商户订单号
    console.log(1111);
    const { out_trade_no } = ctx.request.body.xml;
    // 根据商户订单号查询支付订单表是否存在此订单
    // const data = await query(`select * from   payorder where out_trade_no = ?`, [out_trade_no]);
    // 根据商户订单号更新订单状态
    await query(`update payorder trade_state = "SUCCESS" where out_trade_no = "${out_trade_no}"`)

    // 告知微信服务器下单完成,微信服务器不会重复回调notify接口
    ctx.body = `<xml>
        <return_code><![CDATA[SUCCESS]]></return_code> 
        <return_msg><![CDATA[OK]]></return_msg>
      </xml>`;
}


// 微信订单查询
module.exports.queryOrder = async (ctx) => {
    const { nonce_str, out_trade_no } = ctx.request.body;
    let params = {
        appid,
        mch_id,
        nonce_str, // 32位以内的随机字符串,
        out_trade_no
    };
    // 生成签名
    let sign = createSign(params);

    let sendData = `
       <xml>
            <appid>${appid}</appid>
            <mch_id>${mch_id}</mch_id>
            <nonce_str>${nonce_str}</nonce_str>
            <out_trade_no>${out_trade_no}</out_trade_no>
            <sign>${sign}</sign>
       </xml>
    `

    const data = await orderHandle(orderquery, sendData);

    ctx.body = {
        status: 200,
        data
    }
}