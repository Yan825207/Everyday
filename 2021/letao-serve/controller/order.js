const {
    appid,
    mch_id,
    orderUrl
} = require("../config/wx")
const {
    randomStr,
    createSign,
    getTrade_no,
    notify_url,
    createOrder
} = require("../utils/index")
const QRcode = require("qrcode")
module.exports.order = async (ctx) => {
    const {
        body,
        spbill_create_ip,
        trade_type,
        total_fee
    } = ctx.request.body
    const params = {
        appid,
        mch_id, // 商户号
        nonce_str: randomStr(), // 32位以内的随机字符串
        // sign, // 签名
        body, // 商品描述
        out_trade_no: getTrade_no(), // 商户订单号
        total_fee, // 金额
        spbill_create_ip, // 终端ip
        notify_url, // 微信服务器回调的地址
        trade_type, // 支付类型
    }
    const sign = await createSign(params)

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
        data.payUrl = await QRcode.toDataURL(code_url)
    }
    ctx.body = {
        status: 200,
        data
    }
}