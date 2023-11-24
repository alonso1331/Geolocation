const compass = document.querySelector('svg');
const speed = document.querySelector('.speed');

if ('geolocation' in navigator){
    // watchPosition() 觀看者目前位置
    navigator.geolocation.watchPosition((position) => {
        // 緯度, 經度
        // position.coords.latitude, position.coords.longitude;
        // console.log(position);

        // 移動角度 deg
        const deg = position.coords.heading;
        // deg = 100;
        compass.style.transform = `rotate(${deg}deg)`;

        // 移動速度 m/s 題目要的是 km/h
        const speeds = (position.coords.speed * 3.6).toFixed(2);
        // speeds = 10.4580.toFixed(2);
        // console.log(speeds);
        speed.innerHTML = `${speeds}`;

    });

    // 取得目前位置
    // navigator.geolocation.getCurrentPosition((position) => {
    //     position.coords.latitude, position.coords.longitude;
    //     console.log(position.coords.latitude, position.coords.longitude);
    // });
} else {
    // 取消觀察者位置
    navigator.geolocation.clearWatch();
}