let count = 1
let location_a, location_b, marker_a, marker_b

function initMap() {

    // マップの初期化
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: { lat: 35.38906, lng: 139.426861 }
    });

    // クリックイベントを追加
    map.addListener('click', function (e) {
        if (count > 0) {
            console.log("a")
            getClickLatLng_A(e.latLng, map);
        } else {
            console.log("b")
            getClickLatLng_B(e.latLng, map);
        }
        count = count * -1
    });
}

function getClickLatLng_A(lat_lng, map) {
    if (marker_a != null) {
        marker_a.setMap(null);
    }
    //データ保持
    location_a = lat_lng
    // 座標を表示
    document.getElementById('a-lat').textContent = location_a.lat();
    document.getElementById('a-lng').textContent = location_a.lng();

    // マーカーを設置
    marker_a = new google.maps.Marker({
        position: lat_lng,
        map: map,
        animation: google.maps.Animation.DROP,
        icon: {
            fillColor: "#FF0000",                //塗り潰し色
            fillOpacity: 0.8,                    //塗り潰し透過率
            path: google.maps.SymbolPath.CIRCLE, //円を指定
            scale: 16,                           //円のサイズ
            strokeColor: "#FF0000",              //枠の色
            strokeWeight: 1.0                    //枠の透過率
        },
        label: {
            text: 'A',                           //ラベル文字
            color: '#FFFFFF',                    //文字の色
            fontSize: '20px'                     //文字のサイズ
        }
    });
}

function getClickLatLng_B(lat_lng, map) {
    if (marker_b != null) {
        marker_b.setMap(null);
    }
    //データ保持
    location_b = lat_lng
    // 座標を表示
    document.getElementById('b-lat').textContent = location_b.lat();
    document.getElementById('b-lng').textContent = location_b.lng();

    // マーカーを設置
    marker_b = new google.maps.Marker({
        position: lat_lng,
        map: map,
        animation: google.maps.Animation.DROP,
        icon: {
            fillColor: "#FF0000",                //塗り潰し色
            fillOpacity: 0.8,                    //塗り潰し透過率
            path: google.maps.SymbolPath.CIRCLE, //円を指定
            scale: 16,                           //円のサイズ
            strokeColor: "#FF0000",              //枠の色
            strokeWeight: 1.0                    //枠の透過率
        },
        label: {
            text: 'B',                           //ラベル文字
            color: '#FFFFFF',                    //文字の色
            fontSize: '20px'                     //文字のサイズ
        }
    });

}

function makeurl() {
    console.log("making url");
    let url
    let lat_list = []
    let lng_list = []
    lat_list.push(location_a.lat());
    lat_list.push(location_b.lat());
    lng_list.push(location_a.lng());
    lng_list.push(location_b.lng());
    lat_list.sort();
    lng_list.sort();
    url = "https://icar-svr.sfc.wide.ad.jp/vgkml/snrave?ax="
        + lat_list[0]
        + "&ay=" + lng_list[0]
        + "&bx=" + lat_list[1]
        + "&by=" + lng_list[1]
    return url
}

function openwindows(url) {
    console.log(url)
    window.open(url, '_blank')
}

function getkmlfile() {
    let url = makeurl();
    openwindows(url)
}

function check_ab() {
    if (location_a == null || location_b == null) {
        console.log("a or b is null")
    } else {
        url = getkmlfile()
    }
}

