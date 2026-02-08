export default [
  {
    url: '/api/login',
    method: 'post',
    response: ({ body }) => {
      const { username, password } = body
      if (username === 'admin' && password === '123456') {
        return {
          code: 200,
          message: '成功',
          data: {
            token: 'fake-jwt-token-abc123',
            user: {
              id: 1,
              username: 'admin',
              name: '管理员',
              avatar: 'https://via.placeholder.com/40'
            }
          }
        }
      }
      return {
        code: 401,
        message: '用户名或密码错误',
        data: null
      }
    }
  }
] 
