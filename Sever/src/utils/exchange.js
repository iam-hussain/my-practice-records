export async function successResponce(req, res, message, success_code, payload ) {
    return res
      .status(success_code)
      .json({
        success: true,
        message: message,
        data: payload
      })
      .end();
}
  
export async function errorResponce(req, res, message, error_code) {
    return res
      .status(error_code)
      .json({
        success: true,
        message: message,
        error_code,
        data: {}
      })
      .end();
}