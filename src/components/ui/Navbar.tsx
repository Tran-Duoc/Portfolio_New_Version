import { path } from '../../constants/path.constant';
import useDarkMode from '../../hooks/useDarkMode';
import LinkRouter from '../common/Link/LinkRouter';
import Logo from '../common/Logo/Logo';
import Button from '@mui/material/Button';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Tooltip } from '@mui/material';
const Navbar = () => {
  const { theme, handleChangeTheme } = useDarkMode();

  return (
    <header className='fixed top-0 z-40 w-full flex-none backdrop-blur transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 supports-backdrop-blur:bg-white/60 bg-white/80 dark:border-slate-50/[0.06] dark:bg-transparent'>
      <div className='view'>
        <div className='mx-4 border-b border-slate-900/10 py-4 dark:border-slate-300/10 lg:border-0'>
          <div className='relative flex items-center justify-between'>
            <LinkRouter to='/'>
              <Logo />
            </LinkRouter>
            <div className='flex gap-4'>
              <Tooltip title='Github'>
                <Button variant='outlined' href={path.github} target='_blank'>
                  <GitHubIcon />
                </Button>
              </Tooltip>
              <Tooltip title='FaceBook'>
                <Button variant='outlined' href={path.face} target='_blank'>
                  <FacebookOutlinedIcon />
                </Button>
              </Tooltip>

              <Tooltip title='Change theme mode'>
                <Button
                  variant='outlined'
                  onClick={() => {
                    handleChangeTheme();
                  }}
                >
                  {theme ? <LightModeIcon /> : <DarkModeIcon />}
                </Button>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
