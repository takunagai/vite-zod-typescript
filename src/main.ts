import { z } from 'zod'
import './style.css'

const UserSchema = z.object({
    username: z.string(),
})

const user = { username: 'John' }

const result = UserSchema.parse(user) // 数値だとエラーが throw される
console.log(result)

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>TypeScriptでのZodの利用</h1>
    <p>
      Vite + TypeScript + Zod<br />
      コンソールを確認してください
    </p>
  </div>
`
