"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Coffee, Star, Sparkles } from "lucide-react"

const mensagensMotivacionais = [
  {
    texto: "Você é a diferença na vida de cada criança. Seu trabalho constrói o futuro! 💙",
    autor: "Equipe EduAI",
    categoria: "Motivação",
  },
  {
    texto: "Professor, você planta sementes de conhecimento que florescerão para sempre. 🌱",
    autor: "Paulo Freire (adaptado)",
    categoria: "Inspiração",
  },
  {
    texto: "Cada dia difícil é uma oportunidade de crescer e se tornar ainda mais incrível! ✨",
    autor: "Comunidade EduAI",
    categoria: "Superação",
  },
  {
    texto: "Lembre-se: você não está apenas ensinando matérias, está formando pessoas! 🎯",
    autor: "Rubem Alves (adaptado)",
    categoria: "Propósito",
  },
]

const recursosApoio = [
  {
    titulo: "Meditação para Professores",
    descricao: "5 minutos de relaxamento entre as aulas",
    duracao: "5 min",
    tipo: "Áudio",
    beneficio: "Reduz estresse",
    icon: "🧘‍♀️",
  },
  {
    titulo: "Exercícios de Respiração",
    descricao: "Técnicas rápidas para momentos de tensão",
    duracao: "2-3 min",
    tipo: "Guiado",
    beneficio: "Calma instantânea",
    icon: "🌬️",
  },
  {
    titulo: "Dicas de Organização",
    descricao: "Como organizar seu tempo e materiais",
    duracao: "10 min",
    tipo: "Vídeo",
    beneficio: "Mais produtividade",
    icon: "📋",
  },
  {
    titulo: "Comunidade de Apoio",
    descricao: "Converse com outros professores",
    duracao: "Sempre disponível",
    tipo: "Chat",
    beneficio: "Não se sinta sozinho",
    icon: "👥",
  },
]

const conquistasGamificacao = [
  { nome: "Primeira Semana", descricao: "Completou sua primeira semana na plataforma", pontos: 100, conquistado: true },
  { nome: "Explorador", descricao: "Baixou 10 atividades diferentes", pontos: 250, conquistado: true },
  { nome: "Planejador", descricao: "Criou sua primeira sequência didática", pontos: 300, conquistado: false },
  { nome: "Inclusivo", descricao: "Usou recursos de acessibilidade", pontos: 400, conquistado: false },
  { nome: "Mentor", descricao: "Ajudou outro professor na comunidade", pontos: 500, conquistado: false },
]

export function BemEstarProfessor() {
  const [mensagemAtual, setMensagemAtual] = useState(0)

  const proximaMensagem = () => {
    setMensagemAtual((prev) => (prev + 1) % mensagensMotivacionais.length)
  }

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <Heart className="w-6 h-6" />
          Seu Bem-Estar Importa
        </h2>
        <p className="opacity-90">Porque cuidar de quem cuida é fundamental. Você merece todo o apoio do mundo! 💕</p>
      </div>

      {/* Mensagem Motivacional do Dia */}
      <Card className="border-2 border-pink-200 bg-gradient-to-r from-pink-50 to-rose-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-pink-700">
            <Sparkles className="w-5 h-5" />
            Mensagem do Coração
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
            <p className="text-lg text-gray-700 mb-2 italic">"{mensagensMotivacionais[mensagemAtual].texto}"</p>
            <p className="text-sm text-gray-500">— {mensagensMotivacionais[mensagemAtual].autor}</p>
            <Badge className="mt-2 bg-pink-100 text-pink-700">{mensagensMotivacionais[mensagemAtual].categoria}</Badge>
          </div>
          <Button onClick={proximaMensagem} className="w-full bg-pink-600 hover:bg-pink-700">
            <Heart className="w-4 h-4 mr-2" />
            Nova Mensagem de Carinho
          </Button>
        </CardContent>
      </Card>

      {/* Recursos de Apoio */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {recursosApoio.map((recurso, index) => (
          <Card key={index} className="hover:shadow-md transition-all">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="text-2xl">{recurso.icon}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{recurso.titulo}</h3>
                  <p className="text-sm text-gray-600 mb-2">{recurso.descricao}</p>
                  <div className="flex gap-2 mb-3">
                    <Badge variant="outline" className="text-xs">
                      {recurso.duracao}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {recurso.tipo}
                    </Badge>
                  </div>
                  <p className="text-xs text-green-600 font-medium">✓ {recurso.beneficio}</p>
                </div>
              </div>
              <Button size="sm" className="w-full mt-3 bg-blue-600 hover:bg-blue-700">
                Acessar Agora
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Sistema de Conquistas */}
      <Card className="border-2 border-yellow-200 bg-gradient-to-r from-yellow-50 to-amber-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-yellow-700">
            <Star className="w-5 h-5" />
            Suas Conquistas
          </CardTitle>
          <p className="text-sm text-gray-600">Celebramos cada passo da sua jornada educacional! 🎉</p>
        </CardHeader>
        <CardContent className="space-y-3">
          {conquistasGamificacao.map((conquista, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 p-3 rounded-lg ${
                conquista.conquistado ? "bg-green-100 border border-green-200" : "bg-gray-100 border border-gray-200"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  conquista.conquistado ? "bg-green-500 text-white" : "bg-gray-400 text-white"
                }`}
              >
                {conquista.conquistado ? "✓" : "?"}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800">{conquista.nome}</h4>
                <p className="text-sm text-gray-600">{conquista.descricao}</p>
              </div>
              <Badge className={conquista.conquistado ? "bg-green-600" : "bg-gray-400"}>{conquista.pontos} pts</Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Pausa para o Café */}
      <Card className="bg-gradient-to-r from-amber-100 to-orange-100 border-2 border-amber-200">
        <CardContent className="p-6 text-center">
          <Coffee className="w-12 h-12 text-amber-600 mx-auto mb-3" />
          <h3 className="text-xl font-bold text-amber-800 mb-2">Hora do Café Virtual ☕</h3>
          <p className="text-amber-700 mb-4">
            Que tal uma pausa? Você merece um momento para respirar e se reconectar consigo mesmo.
          </p>
          <Button className="bg-amber-600 hover:bg-amber-700 text-white">
            <Coffee className="w-4 h-4 mr-2" />
            Fazer uma Pausa de 5 min
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
