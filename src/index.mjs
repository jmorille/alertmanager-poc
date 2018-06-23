import fetch from 'node-fetch';


function generateError() {
    console.log("----------------------------------");
    // "endsAt": "<rfc3339>",
    // "startsAt": new Date().toISOString(),
    const data = [
        {
            "labels": {
                "alertname": "baby-alert"
            },
            "annotations": {
                "toto": "tota"
            },
            "startsAt": new Date().toISOString(),
            "generatorURL": "test"
        }
    ];
    //
    const opt = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(data)
    };
    return fetch("http://localhost:9093/api/v1/alerts", opt)
        .then(res => {
            return res.json()
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.error(err)
        });
}


generateError();