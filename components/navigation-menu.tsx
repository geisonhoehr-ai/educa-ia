"use client"

import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface NavigationMenuProps {
  activeTab: string
  setActiveTab: (tab: string) => void
  menuItems: any[]
}

export function NavigationMenu({ activeTab, setActiveTab, menuItems }: NavigationMenuProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const groupedMenuItems = {
    atividades: menuItems.filter((item) => ["buscar", "gerar", "ludicas"].includes(item.id)),
    planejamento: menuItems.filter((item) => ["planejador", "calendario"].includes(item.id)),
    inclusao: menuItems.filter((item) => ["inclusao"].includes(item.id)),
    recursos: menuItems.filter((item) => ["musicas", "podcasts"].includes(item.id)),
    comunidade: menuItems.filter((item) => ["noticias", "bem-estar"].includes(item.id)),
    favoritos: menuItems.filter((item) => ["favoritos"].includes(item.id)),
  }

  const MenuGroup = ({ title, items, groupKey }: { title: string; items: any[]; groupKey: string }) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 hover:bg-blue-50 dark:hover:bg-blue-900/20 ${
            items.some((item) => item.id === activeTab)
              ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
              : "text-gray-600 dark:text-gray-300"
          }`}
        >
          <span className="font-medium">{title}</span>
          <ChevronDown className="w-4 h-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 p-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-xl rounded-xl">
        {items.map((item) => {
          const Icon = item.icon
          return (
            <DropdownMenuItem
              key={item.id}
              onClick={() => {
                setActiveTab(item.id)
                setMobileMenuOpen(false)
              }}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 hover:bg-blue-50 dark:hover:bg-blue-900/20 ${
                activeTab === item.id
                  ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="font-medium">{item.label}</span>
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-2 px-6 py-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-1">
          <MenuGroup title="📚 Atividades" items={groupedMenuItems.atividades} groupKey="atividades" />
          <MenuGroup title="📋 Planejamento" items={groupedMenuItems.planejamento} groupKey="planejamento" />
          <MenuGroup title="💙 Inclusão" items={groupedMenuItems.inclusao} groupKey="inclusao" />
          <MenuGroup title="🎵 Recursos" items={groupedMenuItems.recursos} groupKey="recursos" />
          <MenuGroup title="👥 Comunidade" items={groupedMenuItems.comunidade} groupKey="comunidade" />
          {groupedMenuItems.favoritos.map((item) => {
            const Icon = item.icon
            return (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 hover:bg-red-50 dark:hover:bg-red-900/20 ${
                  activeTab === item.id
                    ? "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300"
                    : "text-gray-600 dark:text-gray-300"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium">❤️ {item.label}</span>
              </Button>
            )
          })}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between px-4 py-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
          <span className="font-semibold text-gray-800 dark:text-gray-200">Menu</span>
          <div className="w-10" /> {/* Spacer */}
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-xl">
            <div className="p-4 space-y-2 max-h-96 overflow-y-auto">
              {Object.entries(groupedMenuItems).map(([groupKey, items]) => (
                <div key={groupKey} className="space-y-1">
                  <div className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    {groupKey === "atividades" && "📚 Atividades"}
                    {groupKey === "planejamento" && "📋 Planejamento"}
                    {groupKey === "inclusao" && "💙 Inclusão"}
                    {groupKey === "recursos" && "🎵 Recursos"}
                    {groupKey === "comunidade" && "👥 Comunidade"}
                    {groupKey === "favoritos" && "❤️ Favoritos"}
                  </div>
                  {items.map((item) => {
                    const Icon = item.icon
                    return (
                      <Button
                        key={item.id}
                        variant="ghost"
                        onClick={() => {
                          setActiveTab(item.id)
                          setMobileMenuOpen(false)
                        }}
                        className={`w-full justify-start gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                          activeTab === item.id
                            ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="font-medium">{item.label}</span>
                      </Button>
                    )
                  })}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
