import { Mouse, MoveDown } from 'lucide-react';

type Props = {
    title: string;
    description: string;
}

const ModuleTitle = ({ title, description }: Props) => {
    return (
        <section className='flex flex-col py-12 justify-center items-center'>
            <Mouse color='#12F7D6' />
            <MoveDown color='white' className='h-16' />
            <div className='w-fit'>
                <h2 className='text-primary text-2xl font-ubuntu'>{title}</h2>
                <div className='w-full flex items-center pt-1'>
                    <div className='bg-primary w-1.5 h-1.5 rounded-full'></div>
                    <hr className='w-full border-none bg-primary h-px ' />
                    <div className='bg-primary w-1.5 h-1.5 rounded-full'></div>
                </div>
            </div>
            <p className='text-white font-ibm text-xs'>{description}</p>
        </section>
    )
}

export default ModuleTitle