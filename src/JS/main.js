const arr = [];
function addProduct() {
    // taking input from the user 
    const pid = document.getElementById("prodId").value;
    const pname = document.getElementById("prodName").value;
    const pprice = document.getElementById("prodPrice").value;
    const apt = /^[A-Za-z]+$/;
    // applying required validations
    if (pid == "" || pname == "" || pprice == "") {
        document.getElementById("msg").innerHTML = "Enter values for all fields";
    } else if (!((pid >= 'A' && pid <= 'Z') || (pid >= 'a' && pid <= 'z') || (pid >= '0' && pid <= '9') || pid == "_")) {
        document.getElementById("msg").innerHTML = "Enter valid ProductId";
    } else if (!(pname.match(apt))) {
        document.getElementById("msg").innerHTML = "Enter valid ProductName";
    } else if(pprice < 0){
        document.getElementById("msg").innerHTML = "Enter valid ProductPrice";
    } 
    else {
        arr.push({
            ProductId: pid,
            ProductName: pname,
            ProductPrice: "USD" + " " + pprice
        });
        const tbl = document.getElementById("tbid");
        const row = document.createElement("tr");
        const c1 = document.createElement("td");
        const c2 = document.createElement("td");
        const c3 = document.createElement("td");
        c1.innerHTML = arr[arr.length - 1].ProductId;
        c2.innerHTML = arr[arr.length - 1].ProductName;
        c3.innerHTML = arr[arr.length - 1].ProductPrice;
        row.append(c1);
        row.append(c2);
        row.append(c3);
        tbl.append(row);
    }
}