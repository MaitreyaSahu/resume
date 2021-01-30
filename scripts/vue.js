Vue.component("project", {
    props: ["project"],
    template: `
            
            <section class="project-item">
            <img class="project-img" src={{project.name}} alt=project.name{{project.name}}>
            <div>
                <h3>
                    <a href="#">{{project.name}}</a>
                    <!-- <a href="https://maitreyasahu.github.io/TicTacToe/" target="_blank">Tik Tak Toe</a> -->
                </h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, perferendis, culpa eum
                    tempora
                    fuga
                    cum accusantium numquam unde quod veniam obcaecati perspiciatis similique animi iste soluta
                    natus!
                    Voluptate, expedita ratione!</p>
                <ul class="project-tech">
                    <li><ion-icon name="logo-html5"></ion-icon></li>
                    <li><ion-icon name="logo-css3"></ion-icon></li>
                    <li><ion-icon name="logo-javascript"></ion-icon></li>
                </ul>
                <a class="btn" href="#">Source Code</a>
            </div>
        </section>
    `
});

new Vue({
    el: "#git-projects",
    data: {
        projects: []
    },
    created: function () {
        // Alias the component instance as `vm`, so that we
        // can access it inside the promise function
        var vm = this;
        // Fetch our array of posts from an API
        fetch("https://api.github.com/users/MaitreyaSahu/repos")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                vm.projects = data.filter(project => (project.homepage != null));
                console.log(data);
            });
    }
});



