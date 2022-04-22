$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/homecabe2.png',
            link: 'https://github.com/shell36524/homecabe',
            title: 'HOME CA:BE',
            demo: 'https://youtu.be/mo-Qp-KBh0w',
            demo2:'https://drive.google.com/file/d/1k1XbPnrA5eZeJLXC1h5z6YEuD43sW_-H/view?usp=sharing',
            technologies: ['JAVA/JS', 'ORACLE', 'OPEN API'],
            description: " 코로나로 인한 실내활동 증가로 홈카페, 홈베이킹에 관한 관심이 증가해 홈카페, 홈베이킹 레시피와 SNS 업로드용 사진을 찍는 기술을 공유하는 커뮤니티 제공을 목표",
            categories: ['featured','native','security','div','webdev']
        },
        {
            image: 'assets/images/app3.png',
            link: 'https://github.com/shell36524/app3',
            title: 'APP3',
            // demo: 'http://wall-e-jekyll.github.io/',
            technologies: ['JAVA/JS', 'ORACLE', 'OPEN API'],
            description: "울산KH정보교육원 '멀티디바이스융합 JAVA 디지털컨퍼런스과정' 중 수행했던 개별 과제로, 기본적인 기능의 홈페이지 구현을 목표로 만듦. 메인화면 구성과 게시판에서 게시물 작성과 수정 그리고 회원관리를 구현함",
            categories: ['featured','native','security','div','webdev']
        }
        // {
        //     image: 'assets/images/collage.jpg',
        //     link: 'https://github.com/abhn/Marvel',
        //     title: 'Marvel',
        //     demo: false,
        //     technologies: ['Android', 'OpenCV'],
        //     description: "Attendance marking tool that uses face recognition for marking attendance and firebase for tracking and analytics.",
        //     categories: ['featured', 'native']
        // },
        // {
        //     image: 'assets/images/mpw.jpg',
        //     link: 'https://github.com/abhn/mpw',
        //     title: 'Master Password',
        //     demo: 'https://www.nagekar.com/mpw',
        //     technologies: ['Semantic UI', 'CSS3'],
        //     description: "Master Password is an ingenious password solution that makes your passwords truly impossible to lose.",
        //     categories: ['featured', 'security']
        // },
        // {
        //     image: 'assets/images/social-share-count.jpeg',
        //     link: 'https://github.com/abhn/Social-Share-Counts',
        //     title: 'Social Share Count',
        //     demo: false,
        //     technologies: ['Python'],
        //     description: "Ever wondered how many times a URL has been shared on popular social networks?",
        //     categories: ['native']
        // },
        // {
        //     image: 'assets/images/data-destroyer.png',
        //     link: 'https://github.com/abhn/data-destroyer-gui',
        //     title: 'Data Destroyer',
        //     demo: false,
        //     technologies: ['C++', 'Qt'],
        //     description: "Native GUI wrapper for GNU coreutils tool 'dd'",
        //     categories: ['native']
        // },
        // {
        //     image: 'assets/images/raspberry-pi-monitor.png',
        //     link: 'https://github.com/abhn/RPi-Status-Monitor',
        //     title: 'Raspberry Pi Monitor',
        //     demo: false,
        //     technologies: ['python', 'flask'],
        //     description: "Web based status monitor/smart mirror, displays system stats, weather and more.",
        //     categories: ['webdev', 'diy']
        // },
        // {
        //     image: 'assets/images/s3scan.png',
        //     link: 'https://github.com/abhn/S3Scan',
        //     title: 'S3Scan',
        //     demo: false,
        //     technologies: ['python'],
        //     description: "Automate crawling of a website and find publicly open S3 buckets for takeover.",
        //     categories: ['native', 'security']
        // },
        // {
        //     image: 'assets/images/elementary.png',
        //     link: 'https://github.com/abhn/Elementary',
        //     title: 'Elementary',
        //     demo: 'https://elementary-jekyll.github.io/',
        //     technologies: ['Jekyll', 'CSS3'],
        //     description: "Elementary is a zero Javascript and minimal CSS ultra lightweight Jekyll theme for those of you who love simplicity.",
        //     categories: ['webdev']
        // },
        // {
        //     image: 'assets/images/soot-spirits.png',
        //     link: 'https://github.com/abhn/Soot-Spirits',
        //     title: 'Soot Spirits',
        //     demo: 'https://sootspirits.github.io',
        //     technologies: ['Jekyll', 'CSS3'],
        //     description: "A simple responsive two column Jekyll theme. Great for personal blog and basic portfolio website.",
        //     categories: ['webdev']
        // },
        // {
        //     image: 'assets/images/python-chat.png',
        //     link: 'https://www.nagekar.com/2014/12/lan-group-messenger-in-python.html',
        //     title: 'Terminal Group Chat',
        //     demo: false,
        //     technologies: ['Python', 'Sockets'],
        //     description: "Simple terminal group chat based on native sockets using Python.",
        //     categories: ['native']
        // },
        // {
        //     image: 'assets/images/old-lcd.jpg',
        //     link: 'https://www.nagekar.com/2018/05/reusing-old-laptop-lcd-panel.html',
        //     title: 'Reusing Old LCD Panel',
        //     demo: false,
        //     technologies: ['DIY'],
        //     description: "Reusing a dead laptop's LCD panel as a secondary monitor.",
        //     categories: ['diy']
        // },
        // {
        //     image: 'assets/images/nextcloud-enc.png',
        //     link: 'https://www.nagekar.com/2017/08/private-cloud-part-2.html',
        //     title: 'Encrypted Self-Hosted Cloud',
        //     demo: false,
        //     technologies: ['NextCloud', 'GnuPG'],
        //     description: "Self hosted encrypted cloud setup with Nextcloud and GnuPG.",
        //     categories: ['diy', 'security']
        // },
        // {
        //     image: 'assets/images/google-cloud-backup.png',
        //     link: 'https://www.nagekar.com/2018/05/encrypted-backup-with-duplicity.html',
        //     title: 'Encrypted Backups - Google Cloud',
        //     demo: false,
        //     technologies: ['NextCloud', 'Duplicity'],
        //     description: "Create automated encrypted incremental backups of data. Sync everything securely to Google Cloud.",
        //     categories: ['diy', 'security']
        // },
        // {
        //     image: 'assets/images/pi-cloud.jpg',
        //     link: 'https://www.nagekar.com/2016/01/how-to-private-local-cloud-using-raspberrypi.html',
        //     title: 'Local Cloud - Raspberry Pi',
        //     demo: false,
        //     technologies: ['FTP', 'DIY'],
        //     description: "Host a local cloud server with a Raspberry Pi and a spare hard disk. Access data instantaneously on any device on the network.",
        //     categories: ['diy']
        // },
        // {
        //     image: 'assets/images/koalamate.png',
        //     link: 'https://github.com/abhn/koalamate',
        //     title: 'Koalamate',
        //     demo: false,
        //     technologies: ['Electron', 'Javascript'],
        //     description: "A cross-platform desktop application that serves as a Wolfram Alpha query place and notes taker.",
        //     categories: ['native']
        // },
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description}</p>
                        <p class="paragraph-text-normal">${project.demo ? `<a href="${project.demo}">[DEMO]</a>` : ''}     ${project.demo2 ? `<a href="${project.demo2}">[PPT]</a></a>` : ''}</p>

                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}