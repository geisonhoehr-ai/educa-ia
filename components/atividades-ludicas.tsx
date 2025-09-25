"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Gamepad2, Users, Clock, Target, Smile, Zap } from "lucide-react"

const jogosLudicos = [
  {
    titulo: "Dança das Cadeiras Educativa",
    categoria: "Coordenação Motora",
    idade: "4-8 anos",
    participantes: "5-20 crianças",
    tempo: "15-20 min",
    objetivo: "Desenvolver coordenação, ritmo e atenção",
    materiais: ["Cadeiras", "Música", "Cartões com desafios"],
    instrucoes: "Versão educativa onde cada parada inclui uma pergunta ou desafio",
    beneficios: ["Coordenação", "Atenção", "Socialização"],
    cor: "bg-yellow-100",
    icon: "🎵",
  },
  {
    titulo: "Caça ao Tesouro Matemático",
    categoria: "Raciocínio Lógico",
    idade: "6-10 anos",
    participantes: "3-15 crianças",
    tempo: "30-45 min",
    objetivo: "Resolver problemas matemáticos de forma divertida",
    materiais: ["Pistas matemáticas", "Prêmios", "Mapa"],
    instrucoes: "Crianças seguem pistas resolvendo operações matemáticas",
    beneficios: ["Raciocínio", "Trabalho em equipe", "Motivação"],
    cor: "bg-blue-100",
    icon: "🔍",
  },
  {
    titulo: "Teatro de Fantoches Interativo",
    categoria: "Expressão Oral",
    idade: "3-8 anos",
    participantes: "5-25 crianças",
    tempo: "20-30 min",
    objetivo: "Desenvolver linguagem e criatividade",
    materiais: ["Fantoches", "Cenário", "Roteiro flexível"],
    instrucoes: "Crianças participam da história sugerindo ações e diálogos",
    beneficios: ["Linguagem", "Criatividade", "Confiança"],
    cor: "bg-purple-100",
    icon: "🎭",
  },
  {
    titulo: "Circuito Motor Temático",
    categoria: "Coordenação Motora",
    idade: "3-7 anos",
    participantes: "8-20 crianças",
    tempo: "25-35 min",
    objetivo: "Desenvolver habilidades motoras grossas",
    materiais: ["Cones", "Cordas", "Bambolês", "Colchonetes"],
    instrucoes: "Percurso com obstáculos temáticos (animais, profissões, etc.)",
    beneficios: ["Coordenação", "Força", "Equilíbrio"],
    cor: "bg-green-100",
    icon: "🏃",
  },
  {
    titulo: "Jogo da Memória Gigante",
    categoria: "Memória e Concentração",
    idade: "4-9 anos",
    participantes: "6-16 crianças",
    tempo: "15-25 min",
    objetivo: "Exercitar memória e atenção",
    materiais: ["Cartas grandes", "Tapete", "Timer"],
    instrucoes: "Versão gigante do jogo da memória com movimento corporal",
    beneficios: ["Memória", "Atenção", "Movimento"],
    cor: "bg-pink-100",
    icon: "🧠",
  },
  {
    titulo: "Oficina de Slime Educativo",
    categoria: "Coordenação Motora Fina",
    idade: "5-10 anos",
    participantes: "4-12 crianças",
    tempo: "40-60 min",
    objetivo: "Desenvolver coordenação fina e conceitos científicos",
    materiais: ["Cola", "Ativador", "Corantes", "Glitter"],
    instrucoes: "Criação de slime explorando texturas e conceitos de química",
    beneficios: ["Coordenação fina", "Ciências", "Criatividade"],
    cor: "bg-teal-100",
    icon: "🧪",
  },
]

export function AtividadesLudicas() {
  const JogoCard = ({ jogo }: { jogo: any }) => (
    <Card className={`${jogo.cor} border-2 hover:shadow-lg transition-all duration-200 hover:-translate-y-1`}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <span className="text-2xl">{jogo.icon}</span>
          {jogo.titulo}
        </CardTitle>
        <Badge className="w-fit bg-indigo-600 text-white">{jogo.categoria}</Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-700 font-medium">{jogo.objetivo}</p>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4 text-blue-600" />
            <span>{jogo.participantes}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-green-600" />
            <span>{jogo.tempo}</span>
          </div>
          <div className="flex items-center gap-1">
            <Target className="w-4 h-4 text-purple-600" />
            <span>{jogo.idade}</span>
          </div>
          <div className="flex items-center gap-1">
            <Smile className="w-4 h-4 text-orange-600" />
            <span>Diversão garantida!</span>
          </div>
        </div>

        <div>
          <span className="font-semibold text-gray-600 block mb-2">Benefícios:</span>
          <div className="flex flex-wrap gap-1">
            {jogo.beneficios.map((beneficio: string, idx: number) => (
              <Badge key={idx} variant="secondary" className="text-xs">
                {beneficio}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex gap-2">
          <Button size="sm" className="flex-1 bg-indigo-600 hover:bg-indigo-700">
            <Gamepad2 className="w-4 h-4 mr-1" />
            Ver Instruções
          </Button>
          <Button size="sm" variant="outline" className="flex-1 bg-transparent">
            <Zap className="w-4 h-4 mr-1" />
            Baixar PDF
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <Gamepad2 className="w-6 h-6" />
          Atividades Lúdicas & Brincadeiras
        </h2>
        <p className="opacity-90">Jogos e brincadeiras que transformam o aprendizado em diversão pura!</p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <h3 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
          <Smile className="w-5 h-5" />💡 Dica do Professor Experiente
        </h3>
        <p className="text-amber-700 text-sm">
          "Lembre-se: o brincar é a linguagem natural da criança. Através dele, ela aprende, se desenvolve e constrói
          vínculos. Cada atividade aqui foi pensada para ser educativa E divertida!"
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {jogosLudicos.map((jogo, index) => (
          <JogoCard key={index} jogo={jogo} />
        ))}
      </div>
    </div>
  )
}
