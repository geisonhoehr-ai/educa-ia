"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Brain, Gamepad2, HandHeart } from "lucide-react"

const atividadesInclusivas = {
  autismo: [
    {
      titulo: "Rotina Visual com Pictogramas",
      descricao: "Sequência visual para organizar o dia da criança autista",
      nivel: "Todos os níveis",
      tempo: "15-30 min",
      materiais: ["Pictogramas", "Velcro", "Quadro"],
      beneficios: ["Organização", "Previsibilidade", "Autonomia"],
    },
    {
      titulo: "Caixa Sensorial Temática",
      descricao: "Atividade tátil para exploração sensorial controlada",
      nivel: "Leve a Moderado",
      tempo: "10-20 min",
      materiais: ["Caixa", "Texturas variadas", "Objetos temáticos"],
      beneficios: ["Integração sensorial", "Foco", "Calma"],
    },
  ],
  tdah: [
    {
      titulo: "Jogo do Movimento Controlado",
      descricao: "Atividade física que trabalha autocontrole e atenção",
      nivel: "Todos os níveis",
      tempo: "20-30 min",
      materiais: ["Música", "Cartões de comando", "Espaço livre"],
      beneficios: ["Autocontrole", "Atenção", "Coordenação"],
    },
    {
      titulo: "Timer Visual de Atividades",
      descricao: "Sistema visual para gerenciar tempo e transições",
      nivel: "Todos os níveis",
      tempo: "Contínuo",
      materiais: ["Timer visual", "Cartões de atividade"],
      beneficios: ["Organização temporal", "Reduz ansiedade", "Autonomia"],
    },
  ],
  libras: [
    {
      titulo: "Alfabeto em Libras Interativo",
      descricao: "Aprendizado do alfabeto manual com jogos",
      nivel: "Iniciante",
      tempo: "25-40 min",
      materiais: ["Cartões ilustrados", "Espelho", "Vídeos"],
      beneficios: ["Comunicação", "Inclusão", "Vocabulário"],
    },
    {
      titulo: "Contação de História Bilíngue",
      descricao: "Histórias narradas em português e Libras simultaneamente",
      nivel: "Todos os níveis",
      tempo: "30-45 min",
      materiais: ["Livro ilustrado", "Vídeo em Libras"],
      beneficios: ["Compreensão", "Inclusão", "Cultura surda"],
    },
  ],
}

export function InclusaoAcessibilidade() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("autismo")

  const AtividadeInclusiva = ({ atividade }: { atividade: any }) => (
    <Card className="border-l-4 border-l-purple-500 hover:shadow-md transition-all">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Brain className="w-5 h-5 text-purple-600" />
          {atividade.titulo}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-700">{atividade.descricao}</p>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-semibold text-gray-600">Nível:</span>
            <p>{atividade.nivel}</p>
          </div>
          <div>
            <span className="font-semibold text-gray-600">Tempo:</span>
            <p>{atividade.tempo}</p>
          </div>
        </div>

        <div>
          <span className="font-semibold text-gray-600 block mb-2">Materiais:</span>
          <div className="flex flex-wrap gap-1">
            {atividade.materiais.map((material: string, idx: number) => (
              <Badge key={idx} variant="outline" className="text-xs">
                {material}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <span className="font-semibold text-gray-600 block mb-2">Benefícios:</span>
          <div className="flex flex-wrap gap-1">
            {atividade.beneficios.map((beneficio: string, idx: number) => (
              <Badge key={idx} className="text-xs bg-green-100 text-green-700">
                {beneficio}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          <Button size="sm" className="flex-1 bg-purple-600 hover:bg-purple-700">
            <HandHeart className="w-4 h-4 mr-1" />
            Baixar Atividade
          </Button>
          <Button size="sm" variant="outline" className="flex-1 bg-transparent">
            Ver Tutorial
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <Heart className="w-6 h-6" />
          Inclusão & Acessibilidade
        </h2>
        <p className="opacity-90">
          Recursos especializados para atender todas as crianças com carinho e profissionalismo
        </p>
      </div>

      <Tabs value={categoriaAtiva} onValueChange={setCategoriaAtiva}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="autismo" className="flex items-center gap-2">
            <Brain className="w-4 h-4" />
            Autismo
          </TabsTrigger>
          <TabsTrigger value="tdah" className="flex items-center gap-2">
            <Gamepad2 className="w-4 h-4" />
            TDAH
          </TabsTrigger>
          <TabsTrigger value="libras" className="flex items-center gap-2">
            <HandHeart className="w-4 h-4" />
            Libras
          </TabsTrigger>
        </TabsList>

        <TabsContent value="autismo" className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-blue-800 mb-2">💙 Dicas para Crianças Autistas</h3>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Use comunicação visual e pictogramas</li>
              <li>• Mantenha rotinas previsíveis</li>
              <li>• Respeite as necessidades sensoriais</li>
              <li>• Celebre pequenos progressos</li>
            </ul>
          </div>
          <div className="grid gap-4">
            {atividadesInclusivas.autismo.map((atividade, idx) => (
              <AtividadeInclusiva key={idx} atividade={atividade} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tdah" className="space-y-4">
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <h3 className="font-semibold text-orange-800 mb-2">🧡 Dicas para Crianças com TDAH</h3>
            <ul className="text-sm text-orange-700 space-y-1">
              <li>• Divida tarefas em etapas menores</li>
              <li>• Use timers visuais</li>
              <li>• Permita movimento controlado</li>
              <li>• Reforce comportamentos positivos</li>
            </ul>
          </div>
          <div className="grid gap-4">
            {atividadesInclusivas.tdah.map((atividade, idx) => (
              <AtividadeInclusiva key={idx} atividade={atividade} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="libras" className="space-y-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-semibold text-green-800 mb-2">💚 Dicas para Inclusão de Surdos</h3>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• Mantenha contato visual ao falar</li>
              <li>• Use expressões faciais claras</li>
              <li>• Aprenda sinais básicos</li>
              <li>• Valorize a cultura surda</li>
            </ul>
          </div>
          <div className="grid gap-4">
            {atividadesInclusivas.libras.map((atividade, idx) => (
              <AtividadeInclusiva key={idx} atividade={atividade} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
