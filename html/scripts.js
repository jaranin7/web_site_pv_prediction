// ตรวจสอบตำแหน่งการเลื่อนและเปลี่ยนแปลง class sticky
window.addEventListener('scroll', function() { // เมื่อเลื่อนหน้าจอจะเรียกใช้ฟังก์ชันนี้
    const navbar = document.getElementById('navbar'); // ดึง element ที่มี id เป็น 'navbar'
    if (window.scrollY > 50) { // ถ้าตำแหน่งการเลื่อนมากกว่า 50
        navbar.classList.add('sticky'); // เพิ่ม class 'sticky' เพื่อทำให้ navbar ติดอยู่ด้านบน
    } else { // ถ้าตำแหน่งเลื่อนน้อยกว่าหรือเท่ากับ 50
        navbar.classList.remove('sticky'); // เอา class 'sticky' ออก
    }
});

// ฟังก์ชันสำหรับนำทางไปยังหน้าเว็บต่าง ๆ
function goToPage(page) { // page คือลิงก์ของหน้าเว็บที่ต้องการไป
    window.location.href = page; // เปลี่ยนหน้าไปตาม URL ที่ระบุ
}

// ฟังก์ชันสำหรับอัปเดตเวลาปัจจุบัน
function updateTime() {
    const now = new Date(); // ดึงเวลาปัจจุบัน
    const options = { // กำหนดรูปแบบเวลา
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false // ใช้รูปแบบเวลา 24 ชั่วโมง
    };
    document.getElementById('time').innerText = 'Time: ' + now.toLocaleTimeString('en-US', options); // แสดงเวลาใน element ที่มี id 'time'
}

setInterval(updateTime, 1000); // เรียกฟังก์ชันอัปเดตเวลาใหม่ทุก 1 วินาที
updateTime(); // เรียกฟังก์ชันทันทีเมื่อโหลดหน้าเว็บ

// ข้อมูลสำหรับ Chart.js
const labels = []; // อาร์เรย์สำหรับเก็บข้อมูลเวลาที่ใช้บนแกน x
const temperatureData = []; // อาร์เรย์สำหรับข้อมูลอุณหภูมิ
const humidityData = []; // อาร์เรย์สำหรับข้อมูลความชื้น
const irradianceData = []; // อาร์เรย์สำหรับข้อมูลพลังงานแสง
const voltageData = []; // อาร์เรย์สำหรับข้อมูลแรงดันไฟฟ้า
const currentData = []; // อาร์เรย์สำหรับข้อมูลกระแสไฟฟ้า
const powerData = []; // อาร์เรย์สำหรับข้อมูลกำลังไฟฟ้า

const temperatureCtx = document.getElementById('temperatureChart').getContext('2d'); // ดึง canvas สำหรับกราฟอุณหภูมิ
const humidityCtx = document.getElementById('humidityChart').getContext('2d'); // ดึง canvas สำหรับกราฟความชื้น
const irradianceCtx = document.getElementById('irradianceChart').getContext('2d'); // ดึง canvas สำหรับกราฟพลังงานแสง
const voltageCtx = document.getElementById('voltageChart').getContext('2d'); // ดึง canvas สำหรับกราฟแรงดันไฟฟ้า
const currentCtx = document.getElementById('currentChart').getContext('2d'); // ดึง canvas สำหรับกราฟกระแสไฟฟ้า
const powerCtx = document.getElementById('powerChart').getContext('2d'); // ดึง canvas สำหรับกราฟกำลังไฟฟ้า

// สร้างกราฟอุณหภูมิ
const temperatureChart = new Chart(temperatureCtx, {
    type: 'line', // ชนิดของกราฟเป็นเส้น
    data: {
        labels: labels, // ใช้ labels เป็นแกน x
        datasets: [{
            label: 'Temperature (°C)', // ป้ายชื่อของข้อมูล
            data: temperatureData, // ข้อมูลของอุณหภูมิ
            borderColor: 'rgba(255, 99, 132, 1)', // สีเส้น
            borderWidth: 2, // ความหนาของเส้น
            fill: false // ไม่เติมสีในพื้นที่ใต้เส้น
        }]
    },
    options: {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Time'
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Temperature (°C)'
                }
            }
        }
    }
});

const humidityChart = new Chart(humidityCtx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'Humidity (%)',
            data: humidityData,
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Time'
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Humidity (%)'
                }
            }
        }
    }
});

const irradianceChart = new Chart(irradianceCtx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'Irradiance (W/m²)',
            data: irradianceData,
            borderColor: 'rgba(59, 235, 24)',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Time'
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Irradiance (W/m²)'
                }
            }
        }
    }
});

const voltageChart = new Chart(voltageCtx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'Voltage (V)',
            data: voltageData,
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Time'
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Voltage (V)'
                }
            }
        }
    }
});

const currentChart = new Chart(currentCtx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'Current (A)',
            data: currentData,
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Time'
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Current (A)'
                }
            }
        }
    }
});

const powerChart = new Chart(powerCtx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'Power (W)',
            data: powerData,
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Time'
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Power (W)'
                }
            }
        }
    }
});


// การสร้างกราฟความชื้น, พลังงานแสง, แรงดันไฟฟ้า, กระแสไฟฟ้า, และกำลังไฟฟ้า จะใช้รูปแบบคล้ายกันกับกราฟอุณหภูมิด้านบน โดยเปลี่ยนเฉพาะชื่อและข้อมูลที่ใช้แสดงเท่านั้น

// การเชื่อมต่อกับ MQTT
const client = mqtt.connect('ws://192.168.1.102:9001'); // สร้างการเชื่อมต่อกับ MQTT broker ผ่าน WebSocket

client.on('connect', function() { // เมื่อเชื่อมต่อกับ MQTT broker สำเร็จ
    console.log('Connected to MQTT broker'); // แสดงข้อความใน console
    client.subscribe('sensor/prediction'); // สมัครหัวข้อ 'sensor/prediction' เพื่อรับข้อมูล
});

client.on('message', function(topic, message) { // เมื่อได้รับข้อความจาก MQTT
    const data = JSON.parse(message.toString()); // แปลงข้อความเป็น JSON

    // แสดงข้อมูลที่ได้รับลงบนหน้าเว็บ
    document.getElementById('temperature').innerText = 'Temperature: ' + data.temperature + ' °C';
    document.getElementById('humidity').innerText = 'Humidity: ' + data.humidity + ' %';
    document.getElementById('irradiance').innerText = 'Irradiance: ' + data.irradiance + ' W/m²';
    document.getElementById('voltage').innerText = 'Voltage: ' + data.voltage + ' V';
    document.getElementById('current').innerText = 'Current: ' + data.current + ' A';
    document.getElementById('power').innerText = 'Power: ' + data.power + ' W';

    const time = new Date().toLocaleTimeString(); // สร้างเวลาเป็น string
    labels.push(time); // เพิ่มเวลาเข้าใน labels
    temperatureData.push(data.temperature); // เพิ่มอุณหภูมิในอาร์เรย์ temperatureData
    humidityData.push(data.humidity); // เพิ่มความชื้นในอาร์เรย์ humidityData
    irradianceData.push(data.irradiance); // เพิ่มพลังงานแสงในอาร์เรย์ irradianceData
    voltageData.push(data.voltage); // เพิ่มแรงดันไฟฟ้าในอาร์เรย์ voltageData
    currentData.push(data.current); // เพิ่มกระแสไฟฟ้าในอาร์เรย์ currentData
    powerData.push(data.power); // เพิ่มกำลังไฟฟ้าในอาร์เรย์ powerData

    if (labels.length > 10) { // ถ้าจำนวนข้อมูลเกิน 10
        labels.shift(); // ลบข้อมูลแรกออก
        temperatureData.shift(); // ลบข้อมูลแรกในอุณหภูมิออก
        humidityData.shift(); // ลบข้อมูลแรกในความชื้นออก
        irradianceData.shift(); // ลบข้อมูลแรกในพลังงานแสงออก
        voltageData.shift(); // ลบข้อมูลแรกในแรงดันไฟฟ้าออก
        currentData.shift(); // ลบข้อมูลแรกในกระแสไฟฟ้าออก
        powerData.shift(); // ลบข้อมูลแรกในกำลังไฟฟ้าออก
    }

    temperatureChart.update(); // อัปเดตกราฟอุณหภูมิ
    humidityChart.update(); // อัปเดตกราฟความชื้น
    irradianceChart.update(); // อัปเดตกราฟพลังงานแสง
    voltageChart.update(); // อัปเดตกราฟแรงดันไฟฟ้า
    currentChart.update(); // อัปเดตกราฟกระแสไฟฟ้า
    powerChart.update(); // อัปเดตกราฟกำลังไฟฟ้า

});

// ฟังก์ชันดึงข้อมูลจาก fetch_data.php และอัปเดตในตาราง
function fetchData() {
    fetch('fetch_data.php') // เรียกใช้งาน fetch เพื่อดึงข้อมูลจากไฟล์ PHP
        .then(response => response.json()) // แปลงข้อมูลที่ได้จากการ fetch เป็น JSON
        .then(data => {
            const tableBody = document.getElementById('sensorTable').getElementsByTagName('tbody')[0];
            tableBody.innerHTML = ''; // ล้างข้อมูลแถวเก่าออก

            data.forEach(item => { // วนลูปข้อมูลที่ได้รับ
                const newRow = tableBody.insertRow(); // เพิ่มแถวใหม่ในตาราง
                newRow.innerHTML = `
                    <td>${item.time}</td>
                    <td>${item.temperature}</td>
                    <td>${item.humidity}</td>
                    <td>${item.irradiance}</td>
                    <td>${item.voltage}</td>
                    <td>${item.current}</td>
                    <td>${item.power}</td>
                    <td>${item.id}</td>
                `; // เติมข้อมูลในแต่ละคอลัมน์
            });
        })
        .catch(error => console.error('Error fetching data:', error)); // แสดง error ถ้า fetch ล้มเหลว
}

// ดึงข้อมูลทุกๆ 5 วินาที
setInterval(fetchData, 5000); // เรียก fetchData ทุกๆ 5 วินาที
fetchData(); // เรียก fetchData เมื่อโหลดหน้าเว็บ
