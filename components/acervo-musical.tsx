"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Music, Play, Pause, Download, Heart, Search, Volume2, Clock } from "lucide-react"

const musicasInfantis = [
  {
    id: 1,
    titulo: "Hino Nacional - Versão Infantil",
    artista: "Coral EduAI",
    categoria: "Cívicas",
    ocasiao: "Independência",
    duracao: "2:45",
    downloads: "2.3k",
    favoritos: 456,
    arquivo: "hino-nacional-infantil.mp3",
    instrumental: true,
    cor: "bg-green-100",
  },
  {
    id: 2,
    titulo: "Mamãe Querida",
    artista: "Turma do EduAI",
    categoria: "Datas Comemorativas",
    ocasiao: "Dia das Mães",
    duracao: "3:12",
    downloads: "5.1k",
    favoritos: 892,
    arquivo: "mamae-querida.mp3",
    instrumental: true,
    cor: "bg-pink-100",
  },
  {
    id: 3,
    titulo: "Papai Herói",
    artista: "Coral EduAI",
    categoria: "Datas Comemorativas",
    ocasiao: "Dia dos Pais",
    duracao: "2:58",
    downloads: "4.2k",
    favoritos: 723,
    arquivo: "papai-heroi.mp3",
    instrumental: true,
    cor: "bg-blue-100",
  },
  {
    id: 4,
    titulo: "Festa Junina Animada",
    artista: "Banda Caipira Kids",
    categoria: "Folclóricas",
    ocasiao: "Festa Junina",
    duracao: "4:15",
    downloads: "3.8k",
    favoritos: 634,
    arquivo: "festa-junina.mp3",
    instrumental: true,
    cor: "bg-yellow-100",
  },
  {
    id: 5,
    titulo: "Natal das Crianças",
    artista: "Coro Natalino",
    categoria: "Natalinas",
    ocasiao: "Natal",
    duracao: "3:45",
    downloads: "6.7k",
    favoritos: 1234,
    arquivo: "natal-criancas.mp3",
    instrumental: true,
    cor: "bg-red-100",
  },
  {
    id: 6,
    titulo: "ABC da Alegria",
    artista: "Professora Melody",
    categoria: "Educativas",
    ocasiao: "Alfabetização",
    duracao: "2:30",
    downloads: "8.9k",
    favoritos: 1567,
    arquivo: "abc-alegria.mp3",
    instrumental: false,
    cor: "bg-purple-100",
  },
  {
    id: 7,
    titulo: "Tabuada do Rock",
    artista: "Matemática Musical",
    categoria: "Educativas",
    ocasiao: "Matemática",
    duracao: "3:20",
    downloads: "7.2k",
    favoritos: 1098,
    arquivo: "tabuada-rock.mp3",
    instrumental: false,
    cor: "bg-indigo-100",
  },
  {
    id: 8,
    titulo: "Formatura dos Pequenos",
    artista: "Orquestra Infantil",
    categoria: "Formaturas",
    ocasiao: "Formatura",
    duracao: "4:00",
    downloads: "3.5k",
    favoritos: 567,
    arquivo: "formatura-pequenos.mp3",
    instrumental: true,
    cor: "bg-teal-100",
  },
]

const playlistsProntas = [
  {
    nome: "Dia das Mães Especial",
    musicas: 8,
    duracao: "25 min",
    downloads: "1.2k",
    descricao: "Seleção especial para homenagear as mamães",
  },
  {
    nome: "Festa Junina Completa",
    musicas: 12,
    duracao: "45 min",
    downloads: "2.1k",
    descricao: "Todas as músicas para sua festa junina",
  },
  {
    nome: "Formatura Emocionante",
    musicas: 6,
    duracao: "22 min",
    downloads: "890",
    descricao: "Para tornar a formatura inesquecível",
  },
  {
    nome: "Natal Mágico",
    musicas: 10,
    duracao: "35 min",
    downloads: "3.4k",
    descricao: "Músicas natalinas para encantar",
  },
]

export function AcervoMusical() {
  const [musicaTocando, setMusicaTocando] = useState<number | null>(null)
  const [filtroCategoria, setFiltroCategoria] = useState("all")
  const [filtroOcasiao, setFiltroOcasiao] = useState("all")
  const [busca, setBusca] = useState("")

  const togglePlay = (id: number) => {
    setMusicaTocando(musicaTocando === id ? null : id)
  }

  const musicasFiltradas = musicasInfantis.filter((musica) => {
    const matchCategoria = filtroCategoria === "all" || musica.categoria === filtroCategoria
    const matchOcasiao = filtroOcasiao === "all" || musica.ocasiao === filtroOcasiao
    const matchBusca = !busca || musica.titulo.toLowerCase().includes(busca.toLowerCase())
    return matchCategoria && matchOcasiao && matchBusca
  })

  const MusicaCard = ({ musica }: { musica: any }) => (
    <Card className={`${musica.cor} border hover:shadow-md transition-all`}>
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <Button
            size="sm"
            variant={musicaTocando === musica.id ? "default" : "outline"}
            onClick={() => togglePlay(musica.id)}
            className="mt-1"
          >
            {musicaTocando === musica.id ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </Button>

          <div className="flex-1">
            <h3 className="font-bold text-gray-800 mb-1">{musica.titulo}</h3>
            <p className="text-sm text-gray-600 mb-2">{musica.artista}</p>

            <div className="flex flex-wrap gap-1 mb-3">
              <Badge variant="outline" className="text-xs">
                {musica.categoria}
              </Badge>
              <Badge variant="secondary" className="text-xs">
                {musica.ocasiao}
              </Badge>
              {musica.instrumental && <Badge className="text-xs bg-purple-100 text-purple-700">Instrumental</Badge>}
            </div>

            <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {musica.duracao}
              </span>
              <span className="flex items-center gap-1">
                <Download className="w-3 h-3" />
                {musica.downloads}
              </span>
              <span className="flex items-center gap-1">
                <Heart className="w-3 h-3" />
                {musica.favoritos}
              </span>
            </div>

            <div className="flex gap-2">
              <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                <Download className="w-3 h-3 mr-1" />
                Download MP3
              </Button>
              {musica.instrumental && (
                <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                  <Volume2 className="w-3 h-3 mr-1" />
                  Karaokê
                </Button>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <Music className="w-6 h-6" />
          Acervo Musical Infantil
        </h2>
        <p className="opacity-90">
          Músicas livres de direitos autorais para suas apresentações e atividades escolares! 🎵
        </p>
      </div>

      {/* Filtros e Busca */}
      <Card className="bg-white">
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Input
              placeholder="Buscar música..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="flex-1"
            />
            <Select value={filtroCategoria} onValueChange={setFiltroCategoria}>
              <SelectTrigger>
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas</SelectItem>
                <SelectItem value="Educativas">Educativas</SelectItem>
                <SelectItem value="Datas Comemorativas">Datas Comemorativas</SelectItem>
                <SelectItem value="Folclóricas">Folclóricas</SelectItem>
                <SelectItem value="Natalinas">Natalinas</SelectItem>
                <SelectItem value="Cívicas">Cívicas</SelectItem>
                <SelectItem value="Formaturas">Formaturas</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filtroOcasiao} onValueChange={setFiltroOcasiao}>
              <SelectTrigger>
                <SelectValue placeholder="Ocasião" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas</SelectItem>
                <SelectItem value="Dia das Mães">Dia das Mães</SelectItem>
                <SelectItem value="Dia dos Pais">Dia dos Pais</SelectItem>
                <SelectItem value="Festa Junina">Festa Junina</SelectItem>
                <SelectItem value="Natal">Natal</SelectItem>
                <SelectItem value="Formatura">Formatura</SelectItem>
                <SelectItem value="Independência">Independência</SelectItem>
              </SelectContent>
            </Select>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Search className="w-4 h-4 mr-2" />
              Filtrar
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Playlists Prontas */}
      <Card className="border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-yellow-50">
        <CardHeader>
          <CardTitle className="text-orange-700 flex items-center gap-2">
            <Music className="w-5 h-5" />
            Playlists Prontas para Download
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {playlistsProntas.map((playlist, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-orange-200">
                <h3 className="font-bold text-gray-800 mb-2">{playlist.nome}</h3>
                <p className="text-sm text-gray-600 mb-3">{playlist.descricao}</p>
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <span>{playlist.musicas} músicas</span>
                  <span>{playlist.duracao}</span>
                  <span>{playlist.downloads} downloads</span>
                </div>
                <Button size="sm" className="w-full bg-orange-600 hover:bg-orange-700">
                  <Download className="w-4 h-4 mr-2" />
                  Baixar Playlist Completa
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Grid de Músicas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {musicasFiltradas.map((musica) => (
          <MusicaCard key={musica.id} musica={musica} />
        ))}
      </div>

      {/* Dica Legal */}
      <Card className="bg-gradient-to-r from-green-100 to-blue-100 border-2 border-green-200">
        <CardContent className="p-6 text-center">
          <Music className="w-12 h-12 text-green-600 mx-auto mb-3" />
          <h3 className="text-xl font-bold text-green-800 mb-2">💡 Dica do Professor Experiente</h3>
          <p className="text-green-700 mb-4">
            "Todas as músicas são livres de direitos autorais! Você pode usar em apresentações, vídeos e atividades sem
            preocupação. As versões instrumentais são perfeitas para karaokê com as crianças!"
          </p>
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            <Heart className="w-4 h-4 mr-2" />
            Criar Minha Playlist Personalizada
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
