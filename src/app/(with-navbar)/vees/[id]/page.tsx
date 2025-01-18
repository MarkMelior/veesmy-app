import { ClientRender } from './client';

interface IVeesPost {
  params: Promise<{ id: string }>
}

const VeesPost = async ({ params }: IVeesPost) => {
  const id = (await params).id;

  return <ClientRender id={id} />;
};

export default VeesPost;
