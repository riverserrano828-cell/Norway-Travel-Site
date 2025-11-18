/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */




if("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("sw.js").then(swReg =>{
            console.log("Worker Registered");
    if('Notification' in window) {
        console.log('Notifications Supported');
        
        Notification.requestPermission(function(status) {
            console.log('Notification Permission: ', status);
            
            if(status === 'granted'){
                new Notification('Norway Travel');
            }
        });
    }
        }).catch(error => {
            console.log("There was an error",error);
        });
    });
}
