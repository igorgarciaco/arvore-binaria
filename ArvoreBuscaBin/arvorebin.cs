using system; 
namespace arvorebin
{
    public class Arvore{
        int num;
        public Arvore right,left;
    }
    public Arvore inserir(Arvore aux, int num){
        if (aux == null) {
            aux = new Arvore();
            aux.num = num;
            aux.right = null;
            aux.left = null;
        } else if (num < aux.num){
            aux.left = inserir(aux.left, num);

        }else {
            aux.right = inserir(aux.right, num);
        }
        return aux;
    }

    public static String imprimir (Arvore aux){
        
    }
}