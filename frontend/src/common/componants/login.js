const { publicRuntimeConfig } = getConfig();

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function handleLogin() {
        const loginInfo = {
            identifier: username,
            password: password
        }

        const login = await fetch(`${publicRuntimeConfig.API_URL}/auth/local`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginInfo)
        })

        const loginResponse = await login.json();

        setCookie(null, 'jwt', loginResponse.jwt, {
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
        })

        Router.push('/payed-articles')
    }

    return (
        <>
            <LoginStyled>
                <div variant="container">
                    <div as="h2" my={40}>
                        You need to login to access this page
                    </div>

                    <form>
                        <input type="email" onChange={e => setUsername(e.target.value)} value={username} /><br />
                        <input type="password" onChange={e => setPassword(e.target.value)} value={password} /><br />
                        <button type="button" onClick={() => handleLogin()}>Login</button>
                    </form>
                </div>
            </LoginStyled>
        </>
    );
}

const LoginStyled = styled.div`
    input {
        padding: 10px;
        margin-bottom: 20px;
        border: 1px solid #cccccc;
        border-radius: 4px;
    }
`

export default Login;