import { path } from '../../constants/path.constant';
import useDarkMode from '../../hooks/useDarkMode';
import LinkRouter from '../common/Link/LinkRouter';
import Logo from '../common/Logo/Logo';
import Button from '@mui/material/Button';

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
              <Button
                onClick={() => {
                  handleChangeTheme();
                }}
              >
                change
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
