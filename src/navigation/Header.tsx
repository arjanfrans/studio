import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import InstagramIcon from '@mui/icons-material/Instagram';

export function Header() {
    return (
        <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{borderBottom: (theme) => `1px solid ${theme.palette.divider}`}}
        >
            <Toolbar sx={{flexWrap: 'wrap'}}>
                <Typography variant="h6" color="inherit" noWrap sx={{flexGrow: 1}}>
                    Music Studio Hard
                </Typography>
                <nav>
                    <Link
                        variant="button"
                        color="text.primary"
                        href="mailto:musicstudiohard@gmail.com"
                        sx={{my: 1, mx: 1.5}}
                    >
                        Contact
                    </Link>
                </nav>
            </Toolbar>
        </AppBar>
    );
}
