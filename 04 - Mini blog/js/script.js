const posts = [
    {
        title: 'Google Chrome',
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et rhoncus lorem. Praesent eu sem tellus. Suspendisse blandit diam ornare, commodo magna id, mollis orci. Quisque elementum ultrices tortor vel laoreet. Maecenas congue suscipit accumsan. Cras ut dolor enim. Morbi quis iaculis dolor."
    },
    {
        title: 'Mozilla Firefox',
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et rhoncus lorem. Praesent eu sem tellus. Suspendisse blandit diam ornare, commodo magna id, mollis orci. Quisque elementum ultrices tortor vel laoreet. Maecenas congue suscipit accumsan. Cras ut dolor enim. Morbi quis iaculis dolor."
    },
    {
        title: 'Microsoft Edge',
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et rhoncus lorem. Praesent eu sem tellus. Suspendisse blandit diam ornare, commodo magna id, mollis orci. Quisque elementum ultrices tortor vel laoreet. Maecenas congue suscipit accumsan. Cras ut dolor enim. Morbi quis iaculis dolor."
    }
];

const wrapper = document.getElementById('posts');

for (var i = 0; i < posts.length; i++) {
    const postData = posts[i];
    console.log(postData);

    const article = document.createElement('article');
    article.classList.add('article');

    const title = document.createElement('h2');
    title.classList.add('article-title');
    const titleText = document.createTextNode(postData.title);
    title.appendChild(titleText);
    article.appendChild(title);

    const content = document.createElement('p');
    const contentText = document.createTextNode(postData.content);
    content.appendChild(contentText);
    article.appendChild(content);

    wrapper.appendChild(article);
}
