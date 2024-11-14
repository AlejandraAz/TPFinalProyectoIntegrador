
const contenedor = document.querySelector('.contenedor');

class Robot{
    constructor(nombre,img,audio){
        this.nombre = nombre;
        this.img = img;
        this.audio = audio;
    }
}

const robots = [
    new Robot('Hongo Magic V.23','/assets/img/robot6.jpg','/assets/videos/robot1audio.mp3'),
    new Robot ('Ojo veTodo V.14.3','/assets/img/robot 7.jpeg','/assets/videos/robot5audio.mp3'),
    new Robot ('MascotLunar v1.3.3','/assets/img/robot 5.jpeg','/assets/videos/robot6audio.mp3'),
    new Robot ('Sapiens Sapiens robotV.10.0','/assets/img/robot1.jpeg','/assets/videos/robot7audio.mp3'),
    new Robot ('AlienRob V.122','/assets/img/robot2.jpeg','/assets/videos/robot8audio.mp3'),
    new Robot ('Robot humano V.88.2','/assets/img/robot3.jpeg','/assets/videos/robot9audio.mp3'),
]

const mostrarRobots = () => {
    robots.forEach(robot => {
        
        const robotItem = document.createElement('div');
        // aca  asigno la clase para manipular luego los estilos en css
        robotItem.className = 'robot-item'; 
        const h4 = document.createElement('h4');
        h4.className = 'robot';
        h4.textContent = robot.nombre;

        const a = document.createElement('a');
        a.href = robot.img;
        a.target = '_blank'; 

        const img = document.createElement('img');
        img.className = 'imagen';
        img.src = robot.img;
        img.alt = robot.nombre;

        const audio = document.createElement('audio');
        audio.controls = true; // Mostrar controles
        const audioSource = document.createElement('source');
        audioSource.src = robot.audio;
        audioSource.type = 'audio/mpeg'; 
        audio.appendChild(audioSource);

        
        a.appendChild(img);
        robotItem.appendChild(h4);
        robotItem.appendChild(a);
        robotItem.appendChild(audio);

        contenedor.appendChild(robotItem);
    });
}


mostrarRobots(robots);



