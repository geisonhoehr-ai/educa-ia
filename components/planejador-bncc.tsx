"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Plus, Target, Calendar, BookOpen } from "lucide-react"

const competenciasEF = {
  "Língua Portuguesa": [
    "Compreender a língua como fenômeno cultural",
    "Apropriar-se da linguagem escrita",
    "Ler, escutar e produzir textos orais, escritos e multissemióticos",
  ],
  Matemática: [
    "Reconhecer que a Matemática é uma ciência humana",
    "Desenvolver o raciocínio lógico",
    "Compreender as relações entre conceitos matemáticos",
  ],
  Ciências: [
    "Compreender conceitos fundamentais das ciências",
    "Analisar, compreender e explicar características",
    "Avaliar aplicações e implicações políticas, ambientais e sociais",
  ],
}

const habilidadesPorAno = {
  "1º Ano": [
    { codigo: "EF01LP01", descricao: "Reconhecer que textos são lidos e escritos da esquerda para a direita" },
    { codigo: "EF01MA01", descricao: "Utilizar números naturais como indicador de quantidade" },
    { codigo: "EF01CI01", descricao: "Comparar características de diferentes materiais" },
  ],
  "2º Ano": [
    { codigo: "EF02LP01", descricao: "Utilizar, ao produzir o texto, grafia correta de palavras" },
    { codigo: "EF02MA01", descricao: "Comparar e ordenar números naturais até a ordem de centenas" },
    { codigo: "EF02CI01", descricao: "Identificar de que materiais são feitos os objetos" },
  ],
}

export function PlanejadorBNCC() {
  const [anoSelecionado, setAnoSelecionado] = useState("")
  const [areaSelecionada, setAreaSelecionada] = useState("")
  const [habilidadesSelecionadas, setHabilidadesSelecionadas] = useState<string[]>([])

  const toggleHabilidade = (codigo: string) => {
    setHabilidadesSelecionadas((prev) => (prev.includes(codigo) ? prev.filter((h) => h !== codigo) : [...prev, codigo]))
  }

  return (
    <div className="space-y-6">
      <Card className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-700">
            <Target className="w-6 h-6" />
            Planejador de Sequência Didática BNCC
          </CardTitle>
          <p className="text-gray-600">
            Monte sua sequência didática selecionando habilidades da BNCC e receba sugestões de atividades
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select value={anoSelecionado} onValueChange={setAnoSelecionado}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o ano" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1º Ano">1º Ano</SelectItem>
                <SelectItem value="2º Ano">2º Ano</SelectItem>
                <SelectItem value="3º Ano">3º Ano</SelectItem>
                <SelectItem value="4º Ano">4º Ano</SelectItem>
                <SelectItem value="5º Ano">5º Ano</SelectItem>
              </SelectContent>
            </Select>

            <Select value={areaSelecionada} onValueChange={setAreaSelecionada}>
              <SelectTrigger>
                <SelectValue placeholder="Área do conhecimento" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Língua Portuguesa">Língua Portuguesa</SelectItem>
                <SelectItem value="Matemática">Matemática</SelectItem>
                <SelectItem value="Ciências">Ciências</SelectItem>
                <SelectItem value="História">História</SelectItem>
                <SelectItem value="Geografia">Geografia</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {anoSelecionado && (
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-700 flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Habilidades BNCC - {anoSelecionado}
              </h4>
              <div className="grid gap-2">
                {habilidadesPorAno[anoSelecionado as keyof typeof habilidadesPorAno]?.map((habilidade) => (
                  <div
                    key={habilidade.codigo}
                    className={`p-3 border rounded-lg cursor-pointer transition-all ${
                      habilidadesSelecionadas.includes(habilidade.codigo)
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => toggleHabilidade(habilidade.codigo)}
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle
                        className={`w-5 h-5 mt-0.5 ${
                          habilidadesSelecionadas.includes(habilidade.codigo) ? "text-blue-600" : "text-gray-300"
                        }`}
                      />
                      <div className="flex-1">
                        <Badge variant="outline" className="mb-1 text-xs">
                          {habilidade.codigo}
                        </Badge>
                        <p className="text-sm text-gray-700">{habilidade.descricao}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {habilidadesSelecionadas.length > 0 && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Sequência Selecionada ({habilidadesSelecionadas.length} habilidades)
              </h4>
              <div className="flex flex-wrap gap-2 mb-3">
                {habilidadesSelecionadas.map((codigo) => (
                  <Badge key={codigo} className="bg-green-600 text-white">
                    {codigo}
                  </Badge>
                ))}
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                <Plus className="w-4 h-4 mr-2" />
                Gerar Atividades para esta Sequência
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {areaSelecionada && (
        <Card>
          <CardHeader>
            <CardTitle className="text-purple-700">Competências Gerais - {areaSelecionada}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {competenciasEF[areaSelecionada as keyof typeof competenciasEF]?.map((competencia, index) => (
                <div key={index} className="flex items-start gap-2 p-2 bg-purple-50 rounded-lg">
                  <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-sm text-gray-700">{competencia}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
