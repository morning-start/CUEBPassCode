<%-- Created by IntelliJ IDEA. User: Ατριήλ Date: 2022/9/30 Time: 14:29 To change this template use File | Settings |
	File Templates. --%>
	<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
		<%@ page isELIgnored="false" %>
			<html lang="en">

			<head>
				<meta charset="UTF-8">
				<meta http-equiv="X-UA-Compatible" content="IE=edge">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>A_出入校扫描</title>
				<link rel="stylesheet" href="./css/pass.css">
			</head>

			<body>
				<%! String department; String name; String studentId; String testDay; String applyTime; String
					expireTime; %>
					<% request.setCharacterEncoding("UTF-8"); department=request.getParameter("department");
						name=request.getParameter("name"); studentId=request.getParameter("studentId"); %>
						<header>
							<div class="label">
								<p>仅添加数据</p>
							</div>
							<hr>
						</header>
						<article class="article">
							<img src="./image/SJM.gif" alt="SJM" class="SJM">
							<div>部门:&nbsp;
								<%=department%>
							</div>
							<div>姓名:&nbsp;
								<%=name%>
							</div>
							<div>学工号:&nbsp;
								<%=studentId%>
							</div>
							<div>核酸检测:&nbsp;
								<i class="red">
									1
								</i>
								&nbsp;天
							</div>
							<div class="green">通过</div>
							<img src="./image/pass.gif" alt="pass" class="pass">

							<div style="text-align:right">
								申请有效期:&nbsp;
								<i class="red" id="applyTime">
								</i><br>
								至:&nbsp;
								<i class="red" id="expireTime">
								</i>
							</div>
							<img src="./image/CUEB.jpg" alt="CUEB" class="CUEB">
						</article>
						<script>
							function formatDate(date) {
								let year = date.getFullYear();
								let month =
									date.getMonth() + 1 < 10
										? "0" + (date.getMonth() + 1)
										: date.getMonth() + 1;
								let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
								return year + "-" + month + "-" + day;
							}
							let applyTime = document.getElementById("applyTime");
							let expireTime = document.getElementById("expireTime");
							let now = new Date();
							let yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000);
							applyTime.innerHTML = formatDate(yesterday);
							expireTime.innerHTML = formatDate(now);
						</script>
			</body>

			</html>