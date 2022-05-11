// Progress bar
let progress = document.querySelectorAll('.main-aside__skills-progress');
let progressNumber = document.querySelectorAll('.main-aside__skills-progress-num');

(function move() {
    progress.forEach((elem,i) =>{
        let start = 0;
        let interval = setInterval(()=>{
            elem.value = start;
            let number = elem.dataset.current;
            progressNumber[i].innerHTML = start + '%';
            start++;
            if(start > number){
                clearInterval(interval);
            }

        }, 10);
    });
})();

