module.exports = {
    apps: [
        {
            name: "smsm-engineers",
            script: "npm",
            args: "start",
            cwd: "/root/smsm-engineers",
            env: {
                NODE_ENV: "production",
                PORT: 7017
            }
        }
    ]
}