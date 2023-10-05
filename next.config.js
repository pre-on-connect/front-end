/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler:{
        styledComponents:true
    },
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'picsum.photos',
                port:'',
                pathname:'/200/300'
            }
        ]
    }
}

module.exports = nextConfig
