const relpaceParamsUrl = (url, replacements) => {
    return replacements.reduce((acc, replacement) => {
        return acc.replace(":" + replacement.from, replacement.to)
    }, url)
}

const initialUrl = '/posts/:postId/comments/:commentId';

const resultUrl = relpaceParamsUrl(initialUrl, [
    { from: "postId", to: "1" },
    { from: "commentId", to: "3" },
])

console.log(resultUrl)