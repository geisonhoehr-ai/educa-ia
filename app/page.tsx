"use client"

import { useState, useEffect } from "react"
import {
  Search,
  Sparkles,
  Calendar,
  Heart,
  Bell,
  Settings,
  Download,
  Eye,
  Star,
  Brain,
  Target,
  Gamepad2,
  Newspaper,
  Coffee,
  Music,
  Mic,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ThemeProvider } from "../components/theme-provider"
import { ThemeToggle } from "../components/theme-toggle"
import { NavigationMenu } from "../components/navigation-menu"
import { AnimatedBackground } from "../components/animated-background"
import { LoadingSpinner } from "../components/loading-spinner"
import { PlanejadorBNCC } from "../components/planejador-bncc"
import { InclusaoAcessibilidade } from "../components/inclusao-acessibilidade"
import { AtividadesLudicas } from "../components/atividades-ludicas"
import { BemEstarProfessor } from "../components/bem-estar-professor"
import { NoticiasEducacao } from "../components/noticias-educacao"
import { AcervoMusical } from "../components/acervo-musical"
import { PodcastsEduAI } from "../components/podcasts-eduai"

const habilidadesBNCC = {
  EF12LP01: {
    codigo: "EF12LP01",
    descricao: "Ler palavras novas com precisão na decodificação",
    componente: "Leitura/escuta",
    ano: "1º e 2º anos",
    area: "Língua Portuguesa",
  },
  EF02MA01: {
    codigo: "EF02MA01",
    descricao: "Comparar e ordenar números naturais até a ordem de centenas",
    componente: "Números",
    ano: "2º ano",
    area: "Matemática",
  },
  EF12LP03: {
    codigo: "EF12LP03",
    descricao: "Copiar textos breves, mantendo suas características",
    componente: "Escrita",
    ano: "1º e 2º anos",
    area: "Língua Portuguesa",
  },
  EF03CI01: {
    codigo: "EF03CI01",
    descricao: "Produzir diferentes sons a partir da vibração de variados objetos",
    componente: "Matéria e energia",
    ano: "3º ano",
    area: "Ciências",
  },
  EF04HI01: {
    codigo: "EF04HI01",
    descricao: "Reconhecer a história como resultado da ação do ser humano no tempo e no espaço",
    componente: "Transformações e permanências",
    ano: "4º ano",
    area: "História",
  },
  EF05GE01: {
    codigo: "EF05GE01",
    descricao: "Descrever e analisar dinâmicas populacionais na Unidade da Federação",
    componente: "O sujeito e seu lugar no mundo",
    ano: "5º ano",
    area: "Geografia",
  },
}

const atividades = [
  {
    id: 1,
    titulo: "Alfabetização com Animais",
    serie: "1º-2º Ano",
    materia: "Língua Portuguesa",
    codigo: "EF12LP01",
    habilidade: habilidadesBNCC["EF12LP01"],
    competencias: ["Leitura", "Decodificação", "Vocabulário"],
    rating: 4.8,
    downloads: "1.2k",
    cor: "bg-blue-100 dark:bg-blue-900/30",
    tags: ["Alfabetização", "Animais", "Leitura"],
  },
  {
    id: 2,
    titulo: "Matemática do Folclore",
    serie: "2º Ano",
    materia: "Matemática",
    codigo: "EF02MA01",
    habilidade: habilidadesBNCC["EF02MA01"],
    competencias: ["Números", "Comparação", "Ordenação"],
    rating: 4.9,
    downloads: "890",
    cor: "bg-green-100 dark:bg-green-900/30",
    tags: ["Números", "Folclore", "Comparação"],
  },
  {
    id: 3,
    titulo: "Caligrafia Primavera",
    serie: "1º-2º Ano",
    materia: "Língua Portuguesa",
    codigo: "EF12LP03",
    habilidade: habilidadesBNCC["EF12LP03"],
    competencias: ["Escrita", "Caligrafia", "Cópia"],
    rating: 4.7,
    downloads: "2.1k",
    cor: "bg-pink-100 dark:bg-pink-900/30",
    tags: ["Caligrafia", "Primavera", "Escrita"],
  },
  {
    id: 4,
    titulo: "Ciências da Natureza",
    serie: "3º Ano",
    materia: "Ciências",
    codigo: "EF03CI01",
    habilidade: habilidadesBNCC["EF03CI01"],
    competencias: ["Som", "Vibração", "Experimentação"],
    rating: 4.6,
    downloads: "1.5k",
    cor: "bg-yellow-100 dark:bg-yellow-900/30",
    tags: ["Som", "Experimentos", "Natureza"],
  },
  {
    id: 5,
    titulo: "História do Brasil",
    serie: "4º Ano",
    materia: "História",
    codigo: "EF04HI01",
    habilidade: habilidadesBNCC["EF04HI01"],
    competencias: ["Tempo", "Espaço", "Transformações"],
    rating: 4.8,
    downloads: "980",
    cor: "bg-purple-100 dark:bg-purple-900/30",
    tags: ["Brasil", "História", "Tempo"],
  },
  {
    id: 6,
    titulo: "Geografia Regional",
    serie: "5º Ano",
    materia: "Geografia",
    codigo: "EF05GE01",
    habilidade: habilidadesBNCC["EF05GE01"],
    competencias: ["População", "Território", "Análise"],
    rating: 4.5,
    downloads: "1.3k",
    cor: "bg-orange-100 dark:bg-orange-900/30",
    tags: ["Geografia", "População", "Região"],
  },
]

const BNCCDetails = ({ habilidade }: { habilidade: any }) => (
  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3 mt-2 transition-all duration-200">
    <div className="flex items-center gap-2 mb-1">
      <Badge
        variant="outline"
        className="text-xs font-bold text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/50"
      >
        {habilidade.codigo}
      </Badge>
      <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">{habilidade.componente}</span>
    </div>
    <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{habilidade.descricao}</p>
  </div>
)

const AtividadeCard = ({ atividade, showFavorited = false }: { atividade: any; showFavorited?: boolean }) => {
  const [favorites, setFavorites] = useState<number[]>([1, 3])
  const [isLoading, setIsLoading] = useState(false)

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]))
  }

  const handleDownload = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 2000) // Simulate download
  }

  return (
    <Card className="group border border-gray-200 dark:border-gray-700 shadow-sm rounded-xl hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-gray-800 overflow-hidden">
      <CardHeader className="p-0">
        <div className={`h-32 ${atividade.cor} rounded-t-xl flex items-center justify-center relative overflow-hidden`}>
          <div className="w-16 h-16 bg-white/20 dark:bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm transition-all duration-300 group-hover:scale-110">
            <Brain className="w-8 h-8 text-gray-600 dark:text-gray-300" />
          </div>
          <Badge className="absolute top-2 right-2 bg-white/90 dark:bg-gray-800/90 text-gray-700 dark:text-gray-300 text-xs backdrop-blur-sm">
            {atividade.habilidade.area}
          </Badge>
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
          {atividade.titulo}
        </h3>

        <div className="flex flex-wrap gap-1 mb-3">
          {atividade.competencias.slice(0, 2).map((comp: string, idx: number) => (
            <Badge
              key={idx}
              variant="secondary"
              className="text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300"
            >
              {comp}
            </Badge>
          ))}
          <Badge
            variant="outline"
            className="text-xs font-medium border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400"
          >
            {atividade.serie}
          </Badge>
        </div>

        <BNCCDetails habilidade={atividade.habilidade} />

        <div className="flex items-center gap-2 mb-3 mt-3">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium text-sm text-gray-700 dark:text-gray-300">{atividade.rating}</span>
          </div>
          <span className="text-gray-500 dark:text-gray-400 text-sm">{atividade.downloads} downloads</span>
        </div>

        <div className="flex items-center gap-2">
          <Button
            size="sm"
            className="flex-1 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-200 hover:scale-105"
            onClick={handleDownload}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-1" />
            ) : (
              <Download className="w-4 h-4 mr-1" />
            )}
            {isLoading ? "Baixando..." : "Download"}
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="flex-1 bg-transparent hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
          >
            <Eye className="w-4 h-4 mr-1" />
            Preview
          </Button>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => toggleFavorite(atividade.id)}
            className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-200 hover:scale-110"
          >
            <Heart
              className={`w-4 h-4 transition-all duration-200 ${
                favorites.includes(atividade.id) || showFavorited
                  ? "fill-red-500 text-red-500 scale-110"
                  : "text-gray-400 dark:text-gray-500 hover:text-red-400"
              }`}
            />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

const datasComemorativos = [
  { data: "22 Mar", evento: "Dia da Água", atividades: 45 },
  { data: "19 Abr", evento: "Dia do Índio", atividades: 32 },
  { data: "22 Abr", evento: "Descobrimento do Brasil", atividades: 28 },
  { data: "07 Set", evento: "Independência do Brasil", atividades: 67 },
  { data: "12 Out", evento: "Dia das Crianças", atividades: 89 },
  { data: "15 Nov", evento: "Proclamação da República", atividades: 41 },
]

const estatisticas = [
  { numero: "12.5k+", descricao: "Atividades Disponíveis" },
  { numero: "8.2k+", descricao: "Professores Ativos" },
  { numero: "95%", descricao: "Satisfação" },
  { numero: "100%", descricao: "BNCC Compliant" },
]

function EduAIDashboardContent() {
  const [activeTab, setActiveTab] = useState("buscar")
  const [isLoading, setIsLoading] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Não renderizar até que o componente esteja montado no cliente
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <LoadingSpinner />
      </div>
    )
  }

  const tabs = [
    { id: "buscar", label: "Buscar Atividades", icon: Search },
    { id: "gerar", label: "Gerar com IA", icon: Sparkles },
    { id: "planejador", label: "Planejador BNCC", icon: Target },
    { id: "ludicas", label: "Atividades Lúdicas", icon: Gamepad2 },
    { id: "inclusao", label: "Inclusão", icon: Heart },
    { id: "musicas", label: "Acervo Musical", icon: Music },
    { id: "podcasts", label: "Podcasts", icon: Mic },
    { id: "calendario", label: "Calendário", icon: Calendar },
    { id: "noticias", label: "Notícias", icon: Newspaper },
    { id: "bem-estar", label: "Bem-Estar", icon: Coffee },
    { id: "favoritos", label: "Favoritos", icon: Heart },
  ]

  const handleTabChange = (newTab: string) => {
    setIsLoading(true)
    setTimeout(() => {
      setActiveTab(newTab)
      setIsLoading(false)
    }, 300)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <AnimatedBackground />

      {/* Header */}
      <header className="relative z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  EduAI
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">Seu melhor amigo educacional</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Badge className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105">
              ✨ Plano Pro
            </Badge>
            <Button
              variant="ghost"
              size="icon"
              className="relative hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200 hover:scale-110"
            >
              <Bell className="w-5 h-5" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            </Button>
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-110"
            >
              <Settings className="w-5 h-5" />
            </Button>
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
              AB
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <NavigationMenu activeTab={activeTab} setActiveTab={handleTabChange} menuItems={tabs} />

      {/* Main Content */}
      <main className="relative z-10 px-6 py-8">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            {/* Tab: Buscar Atividades */}
            {activeTab === "buscar" && (
              <div className="space-y-6 animate-in fade-in-50 duration-500">
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
                  <div className="space-y-4">
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        placeholder="Ex: atividade de leitura para 2º ano sobre folclore…"
                        className="text-lg h-14 pl-12 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                      <Select>
                        <SelectTrigger className="h-12 rounded-xl bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-600">
                          <SelectValue placeholder="Área BNCC" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="portugues">Língua Portuguesa</SelectItem>
                          <SelectItem value="matematica">Matemática</SelectItem>
                          <SelectItem value="ciencias">Ciências</SelectItem>
                          <SelectItem value="historia">História</SelectItem>
                          <SelectItem value="geografia">Geografia</SelectItem>
                        </SelectContent>
                      </Select>
                      <Select>
                        <SelectTrigger className="h-12 rounded-xl bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-600">
                          <SelectValue placeholder="Ano/Série" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1ano">1º Ano</SelectItem>
                          <SelectItem value="2ano">2º Ano</SelectItem>
                          <SelectItem value="3ano">3º Ano</SelectItem>
                          <SelectItem value="4ano">4º Ano</SelectItem>
                          <SelectItem value="5ano">5º Ano</SelectItem>
                        </SelectContent>
                      </Select>
                      <Select>
                        <SelectTrigger className="h-12 rounded-xl bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-600">
                          <SelectValue placeholder="Componente" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="leitura">Leitura/Escuta</SelectItem>
                          <SelectItem value="escrita">Escrita</SelectItem>
                          <SelectItem value="numeros">Números</SelectItem>
                          <SelectItem value="geometria">Geometria</SelectItem>
                          <SelectItem value="materia">Matéria e Energia</SelectItem>
                        </SelectContent>
                      </Select>
                      <Select>
                        <SelectTrigger className="h-12 rounded-xl bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-600">
                          <SelectValue placeholder="Competência" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="alfabetizacao">Alfabetização</SelectItem>
                          <SelectItem value="numeramento">Numeramento</SelectItem>
                          <SelectItem value="experimentacao">Experimentação</SelectItem>
                          <SelectItem value="analise">Análise</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button className="h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <Search className="w-4 h-4 mr-2" />
                        Buscar por BNCC
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {atividades.map((atividade, index) => (
                    <div
                      key={atividade.id}
                      className="animate-in fade-in-50 duration-500"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <AtividadeCard atividade={atividade} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab: Gerar com IA */}
            {activeTab === "gerar" && (
              <div className="space-y-6 animate-in fade-in-50 duration-500">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center shadow-2xl">
                  <div className="flex items-center justify-center mb-4">
                    <Sparkles className="w-12 h-12 animate-pulse" />
                  </div>
                  <h2 className="text-3xl font-bold mb-2">Gerador de Atividades com IA</h2>
                  <p className="text-lg opacity-90">Descreva sua atividade ideal e nossa IA criará em segundos</p>
                </div>

                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
                  <div className="space-y-6">
                    <Textarea
                      placeholder="Descreva a atividade que você precisa…"
                      className="min-h-32 text-lg bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 transition-all duration-200"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Select>
                        <SelectTrigger className="h-12 rounded-xl bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-600">
                          <SelectValue placeholder="Série/Ano" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1ano">1º Ano</SelectItem>
                          <SelectItem value="2ano">2º Ano</SelectItem>
                          <SelectItem value="3ano">3º Ano</SelectItem>
                          <SelectItem value="4ano">4º Ano</SelectItem>
                          <SelectItem value="5ano">5º Ano</SelectItem>
                        </SelectContent>
                      </Select>
                      <Select>
                        <SelectTrigger className="h-12 rounded-xl bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-600">
                          <SelectValue placeholder="Dificuldade" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="facil">Fácil</SelectItem>
                          <SelectItem value="medio">Médio</SelectItem>
                          <SelectItem value="dificil">Difícil</SelectItem>
                        </SelectContent>
                      </Select>
                      <Select>
                        <SelectTrigger className="h-12 rounded-xl bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-600">
                          <SelectValue placeholder="Formato" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1pagina">A4 - 1 página</SelectItem>
                          <SelectItem value="2paginas">A4 - 2 páginas</SelectItem>
                          <SelectItem value="3paginas">A4 - 3 páginas</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button
                      size="lg"
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
                      Gerar Atividade com IA
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Tab: Planejador BNCC */}
            {activeTab === "planejador" && (
              <div className="animate-in fade-in-50 duration-500">
                <PlanejadorBNCC />
              </div>
            )}

            {/* Tab: Calendário */}
            {activeTab === "calendario" && (
              <div className="space-y-6 animate-in fade-in-50 duration-500">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                  Calendário de Datas Comemorativas
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {datasComemorativos.map((data, index) => (
                    <Card
                      key={index}
                      className="group border border-gray-200 dark:border-gray-700 shadow-sm rounded-2xl hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 overflow-hidden"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                            {data.data}
                          </div>
                          <Badge className="bg-blue-600 dark:bg-blue-700 text-white shadow-md">
                            {data.atividades} atividades
                          </Badge>
                        </div>
                        <h3 className="font-bold text-lg mb-4 text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                          {data.evento}
                        </h3>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                          Ver Atividades
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Tab: Favoritos */}
            {activeTab === "favoritos" && (
              <div className="space-y-6 animate-in fade-in-50 duration-500">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">❤️ Minhas Atividades Favoritas</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {atividades
                    .filter((atividade) => atividade.id === 1 || atividade.id === 3)
                    .map((atividade, index) => (
                      <div
                        key={atividade.id}
                        className="animate-in fade-in-50 duration-500"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <AtividadeCard atividade={atividade} showFavorited />
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* Tab: Atividades Lúdicas */}
            {activeTab === "ludicas" && (
              <div className="animate-in fade-in-50 duration-500">
                <AtividadesLudicas />
              </div>
            )}

            {/* Tab: Inclusão & Acessibilidade */}
            {activeTab === "inclusao" && (
              <div className="animate-in fade-in-50 duration-500">
                <InclusaoAcessibilidade />
              </div>
            )}

            {/* Tab: Notícias Educação */}
            {activeTab === "noticias" && (
              <div className="animate-in fade-in-50 duration-500">
                <NoticiasEducacao />
              </div>
            )}

            {/* Tab: Bem-Estar do Professor */}
            {activeTab === "bem-estar" && (
              <div className="animate-in fade-in-50 duration-500">
                <BemEstarProfessor />
              </div>
            )}

            {/* Tab: Acervo Musical */}
            {activeTab === "musicas" && (
              <div className="animate-in fade-in-50 duration-500">
                <AcervoMusical />
              </div>
            )}

            {/* Tab: Podcasts EduAI */}
            {activeTab === "podcasts" && (
              <div className="animate-in fade-in-50 duration-500">
                <PodcastsEduAI />
              </div>
            )}
          </>
        )}
      </main>

      {/* Footer com Estatísticas */}
      <footer className="relative z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-t border-gray-200 dark:border-gray-700 px-6 py-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {estatisticas.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.numero}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.descricao}</div>
            </div>
          ))}
        </div>
      </footer>
    </div>
  )
}

export default function EduAIDashboard() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="eduai-theme">
      <EduAIDashboardContent />
    </ThemeProvider>
  )
}
