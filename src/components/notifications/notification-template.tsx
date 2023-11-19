type TProps = React.FC<{ children: React.ReactNode }>;

export const NotificationTemplate: TProps = ({ children }) => {
  return (
    <div className={'fixed left-0 top-0 z-10 h-screen w-full bg-zinc-50/10'}>
      <div className={'flex h-full w-full flex-col items-center justify-center'}>
        <div className="flex flex-col items-center justify-center gap-2 rounded-lg bg-zinc-50 px-8 py-4 text-zinc-800 drop-shadow">
          {children}
        </div>
      </div>
    </div>
  );
};
