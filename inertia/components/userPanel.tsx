import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@radix-ui/react-dropdown-menu"
import { Button } from "./ui/button"
import { UserCircle } from "lucide-react"
import { useToast } from "~/hooks/use-toast"
import { router, usePage } from '@inertiajs/react'
import UserDto from "#dtos/user"

const UserPanel = () => {
  const user = usePage().props.user as UserDto
  const { toast } = useToast()

  const logoutUser = () => {
    toast({
      title: "Déconnexion réussie",
      description: "Vous avez été déconnecté avec succès.",
    })

    return router.post('/auth/logout')
  }

  return (
    <Button onClick={logoutUser}>Se déconnecter</Button>
  )
}

export default UserPanel
