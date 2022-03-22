// GET REQUEST
function getToDos() {
    console.log('GET Request');
}

// POST REQUEST
function addToDo() {
    console.log('POST Request');
}

// PUT/PATCH REQUEST
function updateToDo() {
    console.log('PUT/PATCH Request');
}

// DELETE REQUEST
function removeToDo() {
    console.log('DELETE Request');
}

// SIMULTANEOUS DATA
function getData() {
    console.log('Simultaneous Request');
}

// CUSTOM HEADERS
function customHeaders() {
    console.log('Custom Headers');
}

// TRANSFORMING REQUESTS AND RESPONSES
function transformResponse() {
    console.log('Transform Response');
}

// ERROR HANDLING
function errorHandling() {
    console.log('Error Handling');
}

// CANCEL TOKEN
function cancelToken() {
    console.log('Cancel Token');
}




// INTERCEPTING REQUESTS & RESPONSES




// Show Output In Browser
function showOutput(res) {
    document.getElementById('res').innerHTML =

        `
    
    <div class="card card-body mb-4">
        <h5>Status: ${res.status}</h5>
    </div>

    <div class="card mt-3">
        <div class="card-header">
            Headers
        </div>
        <div class="card-body">
            <pre>${JSON.stringify(res.headers, null, 2)}</pre>
        </div>
    </div>

    <div class="card mt-3">
        <div class="card-header">
            Data
        </div>
        <div class="card-body">
            <pre>${JSON.stringify(res.data, null, 2)}</pre>
        </div>
    </div>

    <div class="card mt-3">
        <div class="card-header">
            Config
        </div>
        <div class="card-body">
            <pre>${JSON.stringify(res.config, null, 2)}</pre>
        </div>
    </div>

    `
}



// Event Listeners
document.getElementById('get').addEventListener('click', getToDos);
document.getElementById('post').addEventListener('click', addToDo);
document.getElementById('update').addEventListener('click', updateToDo);
document.getElementById('delete').addEventListener('click', removeToDo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document.getElementById('transform').addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);