"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Newspaper, TrendingUp, Calendar, ExternalLink, BookOpen, Users } from "lucide-react"

const noticias = [
  {
    titulo: "Nova Atualização da BNCC: O que Muda para 2024",
    resumo: "Principais alterações nos códigos de habilidades e como isso impacta o planejamento pedagógico",
    categoria: "BNCC",
    data: "2 dias atrás",
    fonte: "MEC",
    relevancia: "Alta",
    cor: "bg-red-100 text-red-700",
    link: "#",
  },
  {
    titulo: "Tecnologia na Educação: Tendências para o Próximo Ano",
    resumo: "Como a inteligência artificial está transformando a forma de ensinar e aprender",
    categoria: "Tecnologia",
    data: "1 semana atrás",
    fonte: "Portal Educação",
    relevancia: "Média",
    cor: "bg-blue-100 text-blue-700",
    link: "#",
  },
  {
    titulo: "Inclusão Escolar: Novas Diretrizes do CNE",
    resumo: "Conselho Nacional de Educação publica novas orientações para educação inclusiva",
    categoria: "Inclusão",
    data: "3 dias atrás",
    fonte: "CNE",
    relevancia: "Alta",
    cor: "bg-purple-100 text-purple-700",
    link: "#",
  },
  {
    titulo: "Formação Continuada: Cursos Gratuitos Disponíveis",
    resumo: "Lista atualizada de cursos de capacitação para professores da rede pública",
    categoria: "Formação",
    data: "5 dias atrás",
    fonte: "CAPES",
    relevancia: "Média",
    cor: "bg-green-100 text-green-700",
    link: "#",
  },
  {
    titulo: "Saúde Mental do Professor: Pesquisa Revela Dados Preocupantes",
    resumo: "Estudo mostra aumento do burnout entre educadores e apresenta soluções",
    categoria: "Bem-estar",
    data: "1 dia atrás",
    fonte: "APEOESP",
    relevancia: "Alta",
    cor: "bg-orange-100 text-orange-700",
    link: "#",
  },
]

const eventos = [
  {
    titulo: "Congresso Nacional de Educação",
    data: "15-17 Março 2024",
    local: "São Paulo - SP",
    tipo: "Presencial",
    preco: "Gratuito",
  },
  {
    titulo: "Webinar: IA na Educação Infantil",
    data: "28 Fevereiro 2024",
    local: "Online",
    tipo: "Virtual",
    preco: "R$ 50",
  },
  {
    titulo: "Workshop: Educação Inclusiva na Prática",
    data: "10 Março 2024",
    local: "Rio de Janeiro - RJ",
    tipo: "Presencial",
    preco: "R$ 120",
  },
]

export function NoticiasEducacao() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <Newspaper className="w-6 h-6" />
          Notícias & Atualizações Educacionais
        </h2>
        <p className="opacity-90">Mantenha-se sempre atualizado com as últimas novidades da educação brasileira</p>
      </div>

      {/* Notícias Principais */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <TrendingUp className="w-5 h-5" />
          Principais Notícias
        </h3>

        {noticias.map((noticia, index) => (
          <Card key={index} className="hover:shadow-md transition-all">
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className={noticia.cor}>{noticia.categoria}</Badge>
                    <Badge variant="outline" className="text-xs">
                      {noticia.relevancia} Relevância
                    </Badge>
                  </div>
                  <h4 className="font-bold text-lg text-gray-800 mb-2">{noticia.titulo}</h4>
                  <p className="text-gray-600 text-sm mb-3">{noticia.resumo}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {noticia.data}
                    </span>
                    <span>Fonte: {noticia.fonte}</span>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Ler Mais
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Eventos e Formações */}
      <Card className="border-2 border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-700">
            <BookOpen className="w-5 h-5" />
            Eventos & Formações
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {eventos.map((evento, index) => (
            <div key={index} className="bg-white rounded-lg p-4 border border-green-200">
              <h4 className="font-semibold text-gray-800 mb-2">{evento.titulo}</h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {evento.data}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  {evento.tipo}
                </div>
                <div>{evento.local}</div>
                <div className="font-semibold text-green-600">{evento.preco}</div>
              </div>
              <Button size="sm" className="mt-2 bg-green-600 hover:bg-green-700">
                Inscrever-se
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Newsletter */}
      <Card className="bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-purple-200">
        <CardContent className="p-6 text-center">
          <Newspaper className="w-12 h-12 text-purple-600 mx-auto mb-3" />
          <h3 className="text-xl font-bold text-purple-800 mb-2">Newsletter EduAI</h3>
          <p className="text-purple-700 mb-4">
            Receba as principais notícias educacionais diretamente no seu email, toda semana!
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            <Newspaper className="w-4 h-4 mr-2" />
            Assinar Newsletter Gratuita
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
