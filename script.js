const resume_link = "https://1drv.ms/b/s!AiFDBXk1dRWvgcAa2pMNUt2I1qJ4aw?e=TnBc9P";

function downloadResume(){
    
    window.open(resume_link, '_blank');
}

function navClick(id){
    let home = document.getElementById('hero');
    let about = document.getElementById('about');
    let project = document.getElementById('project');
    let contact = document.getElementById('contact');

    switch(id){
        case 'hero':
            contact.style.backgroundColor = 'transparent'
            about.style.backgroundColor = 'transparent'
            project.style.backgroundColor = 'transparent'
            home.style.backgroundColor = 'black'
            break;
        
        case 'about':
            contact.style.backgroundColor = 'transparent'
            about.style.backgroundColor = 'black'
            project.style.backgroundColor = 'transparent'
            home.style.backgroundColor = 'transparent'
            break;

        case 'project':
            contact.style.backgroundColor = 'transparent'
            about.style.backgroundColor = 'transparent'
            project.style.backgroundColor = 'black'
            home.style.backgroundColor = 'transparent'
            break;

        case 'contact':
            contact.style.backgroundColor = 'black'
            about.style.backgroundColor = 'transparent'
            project.style.backgroundColor = 'transparent'
            home.style.backgroundColor = 'transparent'
            break;

        default:
            contact.style.backgroundColor = 'transparent'
            about.style.backgroundColor = 'transparent'
            project.style.backgroundColor = 'transparent'
            home.style.backgroundColor = 'black'
            break;
    }
}


navClick('hero');