import '../assets/styles/footer.styl'

export default {
    data() {
        return {
            author: 'leigangblog',
            blog: 'https://leigangblog.github.io'
        }
    },
    render() {
        return (
            <div id="footer">
                <span>Power by <strong>{this.author}</strong>，欢迎访问作者博客：{this.blog}</span>
            </div>
        )
    }
}