const usersDB = [
    { id: 1, name: "Nguyen Van A", email: "a@gmail.com" },
    { id: 2, name: "Tran Thi B", email: "b@gmail.com" }
]
// =========================
// BÀI 1: CALLBACK
// =========================
function getUserByIdCallback(id, callback) {
    setTimeout(() => {
        const user = usersDB.find((user) => {
            return user.id === id;
        });

        if (user !== undefined) {
            callback(null, user);
        } else {
            callback("Không tìm thấy user!", null);
        }
    }, 1000)
}

//Test ID tồn tại 
getUserByIdCallback(1, (error, user) => {
    if (error) {
        console.error("Lỗi: ", error);

    } else {
        console.log("Bài 1 - Tìm thấy user: ", user);

    }
})

// Test ID không tồn tại
getUserByIdCallback(99, (error, user) => {

    if (error) {
        console.error(
            "Bài 1 - Kết quả mong muốn (Báo lỗi):",
            error
        );
    } else {
        console.log("User:", user);
    }

});

// =========================
// BÀI 2: PROMISE
// =========================
function getUserByIdPromise(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = usersDB.find((user) => {
                return user.id === id;
            });
            if (user !== undefined) {
                resolve(user);
            } else {
                reject("Không tìm thấy user!")
            }
        }, 1000);
    })
}

// Test ID tồn tại
getUserByIdPromise(2)
    .then((user) => {
        console.log("Bài 2 - Tìm thấy user:", user);
    })
    .catch((error) => {
        console.error("Lỗi:", error);
    });
// Test ID không tồn tại
getUserByIdPromise(404)
    .then((user) => {
        console.log("User:", user);
    })
    .catch((error) => {
        console.error(
            "Bài 2 - Kết quả mong muốn (Báo lỗi):",
            error
        );
    });

// =========================
// BÀI 3: ASYNC / AWAIT
// =========================

async function runApp(userId) {

    try {

        console.log(
            ` Đang tìm kiếm user có ID: ${userId} `
        );

        const user = await getUserByIdPromise(userId);

        console.log(
            "Bài 3 - Kết quả tìm thấy:",
            user
        );

    } catch (error) {

        console.error(
            "Bài 3 - Bắt được lỗi hệ thống:",
            error
        );

    }

}

runApp(1);
runApp(55);