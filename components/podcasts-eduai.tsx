"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mic, Play, Pause, Download, Clock, Users, Star, Headphones, Coffee } from "lucide-react"

const episodiosPodcast = [
  {
    id: 1,
    titulo: "Como Lidar com Crianças Autistas na Sala de Aula",
    descricao: "Dicas práticas e estratégias eficazes para incluir e apoiar crianças autistas",
    apresentador: "Dra. Ana Silva - Psicopedagoga",
    duracao: "32 min",
    categoria: "Inclusão",
    data: "2 dias atrás",
    downloads: "2.3k",
    rating: 4.9,
    arquivo: "autismo-sala-aula.mp3",
    destaque: true,
  },
  {
    id: 2,
    titulo: "BNCC na Prática: Planejando com Eficiência",
    descricao: "Como usar a BNCC para criar planejamentos pedagógicos eficientes e organizados",
    apresentador: "Prof. Carlos Mendes - Especialista BNCC",
    duracao: "28 min",
    categoria: "Planejamento",
    data: "1 semana atrás",
    downloads: "3.1k",
    rating: 4.8,
    arquivo: "bncc-pratica.mp3",
    destaque: false,
  },
  {
    id: 3,
    titulo: "Burnout do Professor: Como Prevenir e Tratar",
    descricao: "Estratégias para cuidar da saúde mental e prevenir o esgotamento profissional",
    apresentador: "Psicóloga Marina Costa",
    duracao: "45 min",
    categoria: "Bem-estar",
    data: "3 dias atrás",
    downloads: "4.2k",
    rating: 4.9,
    arquivo: "burnout-professor.mp3",
    destaque: true,
  },
  {
    id: 4,
    titulo: "Tecnologia na Educação Infantil: Sim ou Não?",
    descricao: "Debate sobre o uso adequado de tecnologia com crianças pequenas",
    apresentador: "Prof. Lucia Santos - Educação Infantil",
    duracao: "35 min",
    categoria: "Tecnologia",
    data: "5 dias atrás",
    downloads: "1.8k",
    rating: 4.7,
    arquivo: "tecnologia-infantil.mp3",
    destaque: false,
  },
  {
    id: 5,
    titulo: "Alfabetização Lúdica: Jogos que Funcionam",
    descricao: "Jogos e brincadeiras comprovados para acelerar a alfabetização",
    apresentador: "Profª. Regina Oliveira - Alfabetizadora",
    duracao: "40 min",
    categoria: "Metodologia",
    data: "1 semana atrás",
    downloads: "5.6k",
    rating: 4.9,
    arquivo: "alfabetizacao-ludica.mp3",
    destaque: true,
  },
  {
    id: 6,
    titulo: "Gestão de Sala de Aula: Disciplina Positiva",
    descricao: "Técnicas de disciplina positiva para manter a ordem sem autoritarismo",
    apresentador: "Dr. Roberto Lima - Psicólogo Escolar",
    duracao: "38 min",
    categoria: "Gestão",
    data: "2 semanas atrás",
    downloads: "2.9k",
    rating: 4.8,
    arquivo: "disciplina-positiva.mp3",
    destaque: false,
  },
]

const seriesPodcast = [
  {
    nome: "Professores Inspiradores",
    episodios: 12,
    descricao: "Histórias reais de professores que transformaram vidas",
    categoria: "Inspiração",
  },
  {
    nome: "BNCC Descomplicada",
    episodios: 8,
    descricao: "Série completa sobre como aplicar a BNCC no dia a dia",
    categoria: "Planejamento",
  },
  {
    nome: "Inclusão na Prática",
    episodios: 10,
    descricao: "Estratégias reais para educação inclusiva",
    categoria: "Inclusão",
  },
  {
    nome: "Cuidando do Educador",
    episodios: 6,
    descricao: "Saúde mental e bem-estar para professores",
    categoria: "Bem-estar",
  },
]

export function PodcastsEduAI() {
  const [episodioTocando, setEpisodioTocando] = useState<number | null>(null)
  const [categoriaAtiva, setCategoriaAtiva] = useState("todos")

  const togglePlay = (id: number) => {
    setEpisodioTocando(episodioTocando === id ? null : id)
  }

  const episodiosFiltrados = episodiosPodcast.filter((episodio) => {
    if (categoriaAtiva === "todos") return true
    if (categoriaAtiva === "destaques") return episodio.destaque
    return episodio.categoria.toLowerCase() === categoriaAtiva
  })

  const EpisodioCard = ({ episodio }: { episodio: any }) => (
    <Card className={`hover:shadow-md transition-all ${episodio.destaque ? "border-2 border-yellow-300" : ""}`}>
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          <Button
            size="sm"
            variant={episodioTocando === episodio.id ? "default" : "outline"}
            onClick={() => togglePlay(episodio.id)}
            className="mt-1 bg-purple-600 hover:bg-purple-700"
          >
            {episodioTocando === episodio.id ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </Button>

          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              {episodio.destaque && <Badge className="bg-yellow-500 text-white text-xs">⭐ Destaque</Badge>}
              <Badge variant="outline" className="text-xs">
                {episodio.categoria}
              </Badge>
            </div>

            <h3 className="font-bold text-lg text-gray-800 mb-2">{episodio.titulo}</h3>
            <p className="text-gray-600 text-sm mb-3">{episodio.descricao}</p>
            <p className="text-purple-600 font-medium text-sm mb-3">{episodio.apresentador}</p>

            <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {episodio.duracao}
              </span>
              <span className="flex items-center gap-1">
                <Download className="w-3 h-3" />
                {episodio.downloads}
              </span>
              <span className="flex items-center gap-1">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                {episodio.rating}
              </span>
              <span>{episodio.data}</span>
            </div>

            <div className="flex gap-2">
              <Button size="sm" className="flex-1 bg-purple-600 hover:bg-purple-700">
                <Download className="w-3 h-3 mr-1" />
                Download MP3
              </Button>
              <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                <Headphones className="w-3 h-3 mr-1" />
                Ouvir Online
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <Mic className="w-6 h-6" />
          Podcasts EduAI
        </h2>
        <p className="opacity-90">Conteúdo educacional para ouvir no carro, em casa ou durante suas atividades! 🎧</p>
      </div>

      {/* Navegação por Categorias */}
      <Tabs value={categoriaAtiva} onValueChange={setCategoriaAtiva}>
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="todos">Todos</TabsTrigger>
          <TabsTrigger value="destaques">⭐ Destaques</TabsTrigger>
          <TabsTrigger value="inclusão">Inclusão</TabsTrigger>
          <TabsTrigger value="bem-estar">Bem-estar</TabsTrigger>
          <TabsTrigger value="metodologia">Metodologia</TabsTrigger>
          <TabsTrigger value="planejamento">Planejamento</TabsTrigger>
        </TabsList>

        <TabsContent value={categoriaAtiva} className="space-y-4">
          {episodiosFiltrados.map((episodio) => (
            <EpisodioCard key={episodio.id} episodio={episodio} />
          ))}
        </TabsContent>
      </Tabs>

      {/* Séries de Podcasts */}
      <Card className="border-2 border-indigo-200 bg-gradient-to-r from-indigo-50 to-purple-50">
        <CardHeader>
          <CardTitle className="text-indigo-700 flex items-center gap-2">
            <Users className="w-5 h-5" />
            Séries Completas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {seriesPodcast.map((serie, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-indigo-200">
                <h3 className="font-bold text-gray-800 mb-2">{serie.nome}</h3>
                <p className="text-sm text-gray-600 mb-3">{serie.descricao}</p>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline" className="text-xs">
                    {serie.episodios} episódios
                  </Badge>
                  <Badge className="text-xs bg-indigo-100 text-indigo-700">{serie.categoria}</Badge>
                </div>
                <Button size="sm" className="w-full bg-indigo-600 hover:bg-indigo-700">
                  <Play className="w-4 h-4 mr-2" />
                  Ouvir Série Completa
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Sugestão de Uso */}
      <Card className="bg-gradient-to-r from-amber-100 to-orange-100 border-2 border-amber-200">
        <CardContent className="p-6 text-center">
          <Coffee className="w-12 h-12 text-amber-600 mx-auto mb-3" />
          <h3 className="text-xl font-bold text-amber-800 mb-2">☕ Momentos Perfeitos para Ouvir</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-amber-700 mb-4">
            <div className="bg-white rounded-lg p-3">
              <h4 className="font-semibold mb-1">🚗 No Trânsito</h4>
              <p className="text-sm">Transforme o tempo no carro em aprendizado</p>
            </div>
            <div className="bg-white rounded-lg p-3">
              <h4 className="font-semibold mb-1">🏠 Fazendo Atividades</h4>
              <p className="text-sm">Ouça enquanto prepara materiais</p>
            </div>
            <div className="bg-white rounded-lg p-3">
              <h4 className="font-semibold mb-1">🚶‍♀️ Caminhando</h4>
              <p className="text-sm">Exercite o corpo e a mente juntos</p>
            </div>
          </div>
          <Button className="bg-amber-600 hover:bg-amber-700 text-white">
            <Headphones className="w-4 h-4 mr-2" />
            Assinar Notificações de Novos Episódios
          </Button>
        </CardContent>
      </Card>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="text-center p-4">
          <div className="text-2xl font-bold text-purple-600">50+</div>
          <div className="text-gray-600 text-sm">Episódios Disponíveis</div>
        </Card>
        <Card className="text-center p-4">
          <div className="text-2xl font-bold text-purple-600">15k+</div>
          <div className="text-gray-600 text-sm">Downloads Mensais</div>
        </Card>
        <Card className="text-center p-4">
          <div className="text-2xl font-bold text-purple-600">4.8⭐</div>
          <div className="text-gray-600 text-sm">Avaliação Média</div>
        </Card>
        <Card className="text-center p-4">
          <div className="text-2xl font-bold text-purple-600">2x</div>
          <div className="text-gray-600 text-sm">Novos por Semana</div>
        </Card>
      </div>
    </div>
  )
}
