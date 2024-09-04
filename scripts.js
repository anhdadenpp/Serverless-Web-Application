// Add your API endpoint here
var API_ENDPOINT = "https://7mbm6toyih.execute-api.us-east-1.amazonaws.com/prod";

// AJAX POST request to save product data
document.getElementById("saveproduct").onclick = function () {
    var inputData = {
        "product_id": $('#product_id').val(),
        "store_id": $('#store_id').val(),
        "product_name": $('#product_name').val(),
        "quantity": $('#quantity').val()
    };
    $.ajax({
        url: API_ENDPOINT,
        type: 'POST',
        data: JSON.stringify(inputData),
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            document.getElementById("productSaved").innerHTML = "product Data Saved!";
        },
        error: function () {
            alert("Error saving product data.");
        }
    });
}

// AJAX GET request to retrieve all products
document.getElementById("getproducts").onclick = function () {
    $.ajax({
        url: API_ENDPOINT,
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            $('#productTable tr').slice(1).remove();
            jQuery.each(response, function (i, data) {
                $("#productTable").append("<tr> \
                    <td>" + data['product_id'] + "</td> \
                    <td>" + data['store_id'] + "</td> \
                    <td>" + data['product_name'] + "</td> \
                    <td>" + data['quantity'] + "</td> \
                    </tr>");
            });
        },
        error: function () {
            alert("Error retrieving product data.");
        }
    });
}

// AJAX PUT request to update product data
document.getElementById("updateproduct").onclick = function () {
    var inputData = {
        "product_id": $('#product_id').val(),
        "store_id": $('#store_id').val(),
        "product_name": $('#product_name').val(),
        "quantity": $('#quantity').val()
    };
    $.ajax({
        url: API_ENDPOINT,
        type: 'PUT', // Using PUT for update
        data: JSON.stringify(inputData),
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            document.getElementById("productSaved").innerHTML = "Product Data Updated!";
        },
        error: function () {
            alert("Error updating product data.");
        }
    });
}

// AJAX DELETE request to delete a product
document.getElementById("deleteproduct").onclick = function () {
    var productId = $('#product_id').val(); // Assume product_id is unique and sufficient for deletion
    $.ajax({
        url: API_ENDPOINT + '/' + productId, // Send the product ID as part of the URL
        type: 'DELETE',
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            document.getElementById("productSaved").innerHTML = "Product Deleted!";
        },
        error: function () {
            alert("Error deleting product data.");
        }
    });
}