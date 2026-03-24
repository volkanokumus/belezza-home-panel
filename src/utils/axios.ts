import axios from 'axios'
import { BASE_API_URL } from '../config'

// import { logError } from "./log";

const axiosInstance = axios.create({
    baseURL: BASE_API_URL,
    headers: {
        'ngrok-skip-browser-warning': 'true',
        // 'Allow-Origin': 'http://localhost:5173',
    },
})

axiosInstance.interceptors.response.use(
    (response) => {
        // Başarılı yanıtı dönüyoruz
        return response
    },
    async (error) => {
        // Hata olduğunda detayları Sentry'ye gönderiyoruz
        if (error.response) {
            // Yanıt varsa (API'den dönen hata)

            if (error.config) {
                const { url, data: requestBody, headers } = error.config

                // Request body parse
                let parsedRequestBody = requestBody
                try {
                    parsedRequestBody =
                        typeof requestBody === 'string'
                            ? JSON.parse(requestBody)
                            : requestBody
                } catch {
                    console.log('Request body parse edilemedi')
                }

                // logError({
                //   request_url: url,
                //   status: error.response.status ?? "",
                //   request_headers: JSON.parse(JSON.stringify(headers)),
                //   request_data: parsedRequestBody,
                //   response_data: error.response?.data,
                // });
            }
            // Detayları Sentry'ye gönderme
            //   Sentry.captureException(error, {
            //     tags: {
            //       request_url: error.config.url,
            //       method: error.config.method,
            //       status_code: status,
            //     },
            //     extra: {
            //       request_headers: error.config.headers, // İstek header bilgileri
            //       request_body: error.config.data, // İstek body (payload) bilgileri
            //       response_status: status, // Yanıt status kodu
            //       response_body: data, // Yanıt body (data)
            //       response_headers: headers, // Yanıt header bilgileri
            //     },
            //   });
        } else {
            // Eğer yanıt yoksa (örneğin ağ hatası), sadece hatayı kaydediyoruz
            //   Sentry.captureException(error);
        }

        // 401 hatası durumunda kullanıcıyı çıkış yapmaya yönlendirme
        if (error.response && error.response.status === 401) {
            localStorage.clear()
            window.location.href = '/auth'
        }

        // Hata mesajını döndürme (veya istediğin özel bir mesaj)
        return Promise.reject(
            (error.response && error.response.data) || 'Something went wrong',
        )
    },
)

export default axiosInstance
