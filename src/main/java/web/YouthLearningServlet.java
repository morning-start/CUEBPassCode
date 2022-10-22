package web;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;

@WebServlet("/YouthLearningServlet")
public class YouthLearningServlet extends HttpServlet {
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// request.setCharacterEncoding("utf-8"); // 设置请求体的编码
		this.doPost(request, response);
	}

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// request.setCharacterEncoding("utf-8"); // 设置请求体的编码
		// str = new String(str.getBytes("ISO-8859-1"), "UTF-8"); // 处理get请求乱码问题
		// response.setContentType("text/html;charset=utf-8"); // 设置响应体的编码
		String name = request.getParameter("name");
		String password = request.getParameter("password");

		response.getWriter().write("name: " + name + " password: " + password);
	}
}
