export default async (param) => {

    const { app, pug, path, fs, config, __dirname, jsStringify } = param;
    app.get('/test', async (request, response) => {

        console.log(config);
        let options = {
            website_name: config.WEBSITE_NAME,
            title: `عنوان الصفحة - ${config.WEBSITE_NAME}`,
            keywords: ["word1", "word2", "word3"],
            description: "وصف_الصفحة",
            preview: "صورة_المعاينة_للصفحة",
            session: request.session
        };
        let pugPath = path.join(__dirname, './views/test.pug');
        let render = pug.renderFile(pugPath, { options: options, jsStringify: jsStringify });
        response.send(render);
    });
}