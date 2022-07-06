import { isMobile } from 'react-device-detect';

interface Children {
  children: React.ReactNode;
}

function DeviceDetect({ children }: Children) {
  return isMobile ? (
    <div className='relative w-full h-full infinityScroll'>
      {children}
    </div>
  ) : (
    <>
        <div className='w-screen h-screen bg-center bg-cover bg-no-repeat bg-fixed'>
            <div className="fixed border-8 w-[400px] h-[700px] right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 rounded-[38px]">
                {children}
            </div>
        </div>
    </>
  );
}

export default DeviceDetect;