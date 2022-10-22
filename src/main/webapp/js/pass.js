/*
 * 格式化时间
 * @param date
 * @returns {string} yyyy-mm-dd
 */
// function formatDate(date) {
// 	let year = date.getFullYear();
// 	let month =
// 		date.getMonth() + 1 < 10
// 			? "0" + (date.getMonth() + 1)
// 			: date.getMonth() + 1;
// 	let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
// 	return year + "-" + month + "-" + day;
// }

/*
 * 检查数据格式，onsubmit
 */
function check() {
	let msg = document.getElementById("msg");

	let department = document.getElementById("department");
	let uname = document.getElementById("name");
	let studentId = document.getElementById("studentId");
	// let testDay = document.getElementById("testDay");
	// let applyTime = document.getElementById("applyTime");
	// let expireTime = document.getElementById("expireTime");

	if (
		department.value == "" ||
		uname.value == "" ||
		studentId.value == ""
		// testDay.value == "" ||
		// applyTime.value == "" ||
		// expireTime.value == ""
	) {
		msg.innerHTML = "请填写完整信息";
		return false;
	}

	if (
		studentId.value.length != 11 ||
		isNaN(studentId.value) ||
		studentId.value <= 0
	) {
		msg.innerHTML = "学工号格式错误";
		return false;
	}

	// if (testDay.value.length != 1 || isNaN(testDay.value) || testDay.value <= 0) {
	//     msg.innerHTML = "核酸检测天数格式错误";
	//     return false;
	// }
	// if (testDay.value != 1) {
	//     msg.innerHTML = "核酸检测天数必须1天";
	//     return false;
	// }
}

// TODO 通过name查询数据
function selectByName(name) {
	axios({
		method: "post",
		url: "",
		data: {
			name: name.value,
		},
	}).then(function (response) {});
}

/*
 * 设置默认日期，昨天申请，今天结束
 */
// function defaultDate() {
// 	let applyTime = document.getElementById("applyTime");
// 	let expireTime = document.getElementById("expireTime");
// 	let now = new Date();
// 	let yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000);
// 	//let tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);
// 	applyTime.value = formatDate(yesterday);
// 	expireTime.value = formatDate(now);
// }
