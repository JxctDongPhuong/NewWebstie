import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";

export default function NotFound() {
  return (
    <section className="section-padding min-h-[60vh] flex items-center justify-center bg-white">
      <Container className="text-center">
        <p className="text-8xl md:text-9xl font-heading font-extrabold text-primary-100 mb-4 select-none">
          404
        </p>
        <h1 className="font-heading text-3xl font-bold mb-3 text-neutral-900">
          Trang không tồn tại
        </h1>
        <p className="text-neutral-500 mb-8 max-w-md mx-auto text-base">
          Trang bạn đang tìm kiếm có thể đã bị xóa, đổi tên hoặc tạm thời không khả dụng.
        </p>
        <Button href="/" size="lg">
          Về trang chủ
        </Button>
      </Container>
    </section>
  );
}
