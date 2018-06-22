import  fetch from 'node-fetch';



function generateError() {
    console.log("----------------------------------");
    const data = [
        {
            "labels": {
                "<labelname>": "<labelvalue>"
            },
            "annotations": {
                "<labelname>": "<labelvalue>"
            },
            "startsAt": "<rfc3339>",
            "endsAt": "<rfc3339>",
            "generatorURL": "<generator_url>"
        }
    ];
    const opt = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(data)
    };
    return fetch("http://locahost:8093/api/v1/alerts", opt);
}


generateError();