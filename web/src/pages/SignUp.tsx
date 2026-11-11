import { useState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();

    console.log(name, email, password, passwordConfirm);
  }
  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
      <Input
        required
        legend="Nome"
        type="text"
        placeholder="Digite seu nome"
        onChange={(event) => setName(event.target.value)}
      />

      <Input
        required
        legend="Email"
        type="email"
        placeholder="Digite seu email"
        onChange={(event) => setEmail(event.target.value)}
      />

      <Input
        required
        legend="Senha"
        type="password"
        placeholder="Digite sua senha"
        onChange={(event) => setPassword(event.target.value)}
      />


      <Input
        required
        legend="Confirmar Senha"
        type="password"
        placeholder="Digite sua senha novamente"
        onChange={(event) => setPasswordConfirm(event.target.value)}
      />

      <Button type="submit" isLoading={isLoading}>
        Criar Conta
      </Button>

      <a href="/" className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear">Já tenho uma conta</a>
      
    </form>
  )
}