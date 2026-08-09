import {
    Briefcase,
    Cloud,
    CreditCard,
    FolderKanban,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    Menu,
    MessageSquare,
    Phone,
    Plus,
    PlusCircle,
    Rocket,
    Settings,
    User,
    UserPlus,
    Users,
} from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

export default function ResponsiveDropDown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon"><Menu /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-44 mr-4 px-4">
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        <Link href="#about">About</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Briefcase className="mr-2 h-4 w-4" />
                        <Link href="#experience">Experience</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <FolderKanban className="mr-2 h-4 w-4" />
                        <Link href="#skills">Skills</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Rocket className="mr-2 h-4 w-4" />
                        <Link href="#projects">Projects</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Phone className="mr-2 h-4 w-4" />
                        <Link href="#contact">Contact</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="w-full">
                        <Link className={buttonVariants({ variant: "default", size: "sm" })} href="/zohaib-saeed-cv.pdf" rel="noopener noreferrer" target="_blank">Download Resume</Link>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent >
        </DropdownMenu>
    )
}
