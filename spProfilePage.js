const editProfile = () =>{
    const pop = document.getElementById('profileEdit')
    pop.classList.toggle('displayEdit')

    const bg = document.getElementById('container')
    bg.classList.toggle('blurBG')
}

const editPasswd = () =>{
    const cp = document.getElementById('changePassword')
    cp.classList.toggle('edit-passwd')

    const backG = document.getElementById('container')
    backG.classList.toggle('blurBG')
}